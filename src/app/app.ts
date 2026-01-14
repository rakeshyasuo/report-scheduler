import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject, forkJoin, takeUntil } from 'rxjs';

import { AlertComponent } from './components/shared/alert/alert.component';
import { LoadingSpinnerComponent } from './components/shared/loading-spinner/loading-spinner.component';
import { JsonDisplayComponent } from './components/shared/json-display/json-display.component';
import { BasicInfoComponent } from './components/form/basic-info/basic-info.component';
import { ReportColumnsComponent } from './components/form/report-columns/report-columns.component';
import { ParametersComponent } from './components/form/parameters/parameters.component';
import { ScheduleInfoComponent } from './components/form/schedule-info/schedule-info.component';

import { CsvParserService } from './services/csv-parser.service';
import { ReportDataService } from './services/report-data.service';
import { ReportScheduleService } from './services/report-schedule.service';
import { ColumnDataService } from './services/column-data.service';
import { ApiConfigService } from './services/api-config.service';
import { SchedulePayload, CsvRow } from './models/report.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AlertComponent,
    LoadingSpinnerComponent,
    JsonDisplayComponent,
    BasicInfoComponent,
    ReportColumnsComponent,
    ParametersComponent,
    ScheduleInfoComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  reportNames: string[] = [];
  outputFormatsList: string[] = [];

  isSubmitting = false;
  isLoading = false;
  sentPayload: SchedulePayload | null = null;
  apiResponse: any = null;
  errorMessage: string | null = null;

  private csvData: CsvRow[] = [];
  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private csvParser: CsvParserService,
    private reportData: ReportDataService,
    private reportSchedule: ReportScheduleService,
    private columnDataService: ColumnDataService,
    private apiConfig: ApiConfigService
  ) {}

  ngOnInit(): void {
    // Initialize form immediately so template can bind to it
    this.initializeForm();
    this.setupFormSubscriptions();
    
    // Load API configuration and CSV data in parallel
    this.apiConfig.loadApiConfig()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.loadCsv();
        },
        error: (error) => {
          console.error('Failed to load API configuration:', error);
          this.errorMessage = 'Failed to load API configuration';
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      reportName: ['', Validators.required],
      jobName: ['', [Validators.required, Validators.minLength(3)]],
      outputName: [''],
      reportFormat: [''],
      outputFormat: [''],
      reportColumns: this.fb.array([], Validators.required),
      scheduleType: ['', Validators.required],
      timeZone: ['', Validators.required],
      schedule: this.fb.group({}),  // Important: nested group   // ✅ ADD THIS LINE
      runOnDate: [''],
      onceADay: [''],
      frequencyInDays: ['', [Validators.min(1), Validators.max(365)]],
      scheduleStartDate: [''],
      scheduleEndDate: [''],
      repeatStartTime: [''],
      repeatEndTime: [''],
      intervalInSeconds: ['', [Validators.min(1), Validators.max(3600)]],
      parameters: this.fb.group({}),
      // 🔽 🔽 🔽 ADD ONLY THESE 🔽 🔽 🔽
        emailEnabled: [false],
    zipEnabled: [false],
    ftpEnabled: [false],

    emailUserId: [''],
    });
  }

  private setupFormSubscriptions(): void {
    this.form
      .get('reportName')
      ?.valueChanges.pipe(takeUntil(this.destroy$))
      .subscribe(value => this.onReportChange(value));

    this.form
      .get('scheduleType')
      ?.valueChanges.pipe(takeUntil(this.destroy$))
      .subscribe(() => this.updateScheduleValidators());
  }

  private updateScheduleValidators(): void {
    const scheduleType = this.form.get('scheduleType')?.value;
    const controls = {
      runOnDate: this.form.get('runOnDate'),
      onceADay: this.form.get('onceADay'),
      frequencyInDays: this.form.get('frequencyInDays'),
      scheduleStartDate: this.form.get('scheduleStartDate'),
      scheduleEndDate: this.form.get('scheduleEndDate'),
      repeatStartTime: this.form.get('repeatStartTime'),
      repeatEndTime: this.form.get('repeatEndTime'),
      intervalInSeconds: this.form.get('intervalInSeconds')
    };

    Object.values(controls).forEach(ctrl => ctrl?.clearValidators());

    if (scheduleType === 'One Time') {
      controls.runOnDate?.setValidators(Validators.required);
      controls.onceADay?.setValidators(Validators.required);
    } else if (scheduleType === 'Daily') {
      controls.frequencyInDays?.setValidators(Validators.required);
      controls.scheduleStartDate?.setValidators(Validators.required);
      controls.scheduleEndDate?.setValidators(Validators.required);
      controls.onceADay?.setValidators(Validators.required);
    } else if (scheduleType === 'Repeat Window') {
      controls.runOnDate?.setValidators(Validators.required);
      controls.repeatStartTime?.setValidators(Validators.required);
      controls.repeatEndTime?.setValidators(Validators.required);
      controls.intervalInSeconds?.setValidators(Validators.required);
    }

    Object.values(controls).forEach(ctrl => ctrl?.updateValueAndValidity());
  }

  get parametersGroup(): FormGroup {
    return this.form.get('parameters') as FormGroup;
  }

  get reportColumns(): FormArray {
    return this.form.get('reportColumns') as FormArray;
  }

  // ---------------- LOAD CSVs ----------------
  private loadCsv(): void {
    this.isLoading = true;

    forkJoin({
      paramCsv: this.reportData.loadCsv('assets/report_data.csv'),
      columnData: this.columnDataService.loadColumnData(),
      docFormatMappings: this.columnDataService.loadDocFormatMappings()
    })
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: ({ paramCsv }) => {
        try {
          // --- Parameters CSV ---
          this.csvData = this.csvParser.parseCsvData(paramCsv);
          this.reportNames = this.csvParser.extractReportNames(this.csvData);

          this.isLoading = false;
        } catch (err) {
          console.error('CSV parsing error:', err);
          this.errorMessage = 'Error parsing CSV files. Please check the file format.';
          this.isLoading = false;
        }
      },
      error: (err) => {
        console.error('Failed to load CSVs:', err);
        this.errorMessage = 'Could not load CSV files.';
        this.isLoading = false;
      }
    });
  }

  // ---------------- HANDLE REPORT CHANGE ----------------
  private onReportChange(reportName: string): void {
    if (!reportName) {
      this.parametersGroup.reset();
      this.reportColumns.clear();
      return;
    }

    // Clear columns - ReportColumnsComponent will handle loading new ones
    this.reportColumns.clear();
  }

  onColumnToggle(data: { column: string; event: Event }): void {
    const { column, event } = data;
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) {
      this.reportColumns.push(this.fb.control(column));
    } else {
      const index = this.reportColumns.controls.findIndex(
        ctrl => ctrl.value === column
      );
      if (index !== -1) {
        this.reportColumns.removeAt(index);
      }
    }
  }

  // ---------------- SUBMIT ----------------
  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.errorMessage = 'Please fill all required fields correctly.';
      return;
    }

    this.isSubmitting = true;
    this.sentPayload = null;
    this.apiResponse = null;
    this.errorMessage = null;

    const payload = this.buildPayload();
    this.sentPayload = payload;

    console.log('Sending to API:', payload);

    this.reportSchedule
      .submitSchedule(payload)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.isSubmitting = false;
          this.apiResponse = response;
          this.errorMessage = null;
          alert(response?.message || 'Report scheduled successfully!');
          this.resetForm();
        },
        error: (error: HttpErrorResponse) => {
          this.isSubmitting = false;
          this.apiResponse = error.error || error;
          const errorMsg =
            error.error?.message || error.message || 'Failed to schedule report';
          this.errorMessage = errorMsg;
          console.error('API Error:', error);
        }
      });
  }

  private buildPayload(): SchedulePayload {
  const scheduleType = this.form.value.scheduleType;

  const schedule: any = {
    scheduleType: scheduleType?.toUpperCase().replace(/\s+/g, '_')
  };

  if (scheduleType === 'One Time') {
    schedule.runOnDate = this.form.value.runOnDate;
    schedule.onceADay = this.form.value.onceADay;
  }

  if (scheduleType === 'Daily') {
    schedule.frequencyInDays = Number(this.form.value.frequencyInDays) || 1;
    schedule.scheduleStartDate = this.form.value.scheduleStartDate;
    schedule.scheduleEndDate = this.form.value.scheduleEndDate;
    schedule.onceADay = this.form.value.onceADay;
  }

  if (scheduleType === 'Repeat Window') {
    schedule.runOnDate = this.form.value.runOnDate;
    schedule.repeatStartTime = this.form.value.repeatStartTime;
    schedule.repeatEndTime = this.form.value.repeatEndTime;
    schedule.intervalInSeconds = Number(this.form.value.intervalInSeconds) || 60;
  }

  // 👉 IMMEDIATE automatically works here (no extra fields)

  return {
    informationObjectName: `${this.form.value.reportName}.dox`,
    outputName: this.form.value.outputName || null,
    selectedColumns: this.form.value.reportColumns || [],
    outputFormat: this.form.value.outputFormat || null,
    parameters: this.form.value.parameters || {},
    schedule
  };
}


  onCancel(): void {
    this.resetForm();
  }

  onDocTypeChanged(docType: string | undefined): void {
    const format = this.columnDataService.getFormatByDocType(docType);
    const ctrl = this.form.get('reportFormat');
    if (ctrl) {
      ctrl.setValue(format);
    }
  }

  onOutputFormatsUpdated(formats: string[]): void {
  setTimeout(() => {
    this.outputFormatsList = formats;

    const outputCtrl = this.form.get('outputFormat');
    if (outputCtrl) {
      outputCtrl.setValue(formats.length ? formats[0] : '');
    }
  });
}


  private resetForm(): void {
    this.form.reset();
    this.sentPayload = null;
    this.apiResponse = null;
    this.errorMessage = null;
  }
}

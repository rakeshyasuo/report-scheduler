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
import { SchedulePayload, ParameterField, CsvRow } from './models/report.model';

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
  parameterFields: ParameterField[] = [];
  reportColumnsList: string[] = [];
  outputFormatsList: string[] = [];

  isSubmitting = false;
  isLoading = false;
  sentPayload: SchedulePayload | null = null;
  apiResponse: any = null;
  errorMessage: string | null = null;

  private csvData: CsvRow[] = [];
  private allColumnsByReport: { [reportName: string]: string[] } = {};
  private allDocTypeByReport: { [reportName: string]: string } = {};
  private docFormatMappings: { [inputFormat: string]: string[] } = {};
  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private csvParser: CsvParserService,
    private reportData: ReportDataService,
    private reportSchedule: ReportScheduleService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadCsv();
    this.setupFormSubscriptions();
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
      runOnDate: [''],
      onceADay: [''],
      frequencyInDays: ['', [Validators.min(1), Validators.max(365)]],
      scheduleStartDate: [''],
      scheduleEndDate: [''],
      repeatStartTime: [''],
      repeatEndTime: [''],
      intervalInSeconds: ['', [Validators.min(1), Validators.max(3600)]],
      parameters: this.fb.group({})
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
      colCsv: this.reportData.loadCsv('assets/report_columns.csv'),
      mappingCsv: this.reportData.loadCsv('assets/doc_format_mapping.csv')
    })
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: ({ paramCsv, colCsv, mappingCsv }) => {
        try {
          // --- Parameters CSV ---
          this.csvData = this.csvParser.parseCsvData(paramCsv);
          this.reportData.setCsvData(this.csvData); 
          this.reportNames = this.csvParser.extractReportNames(this.csvData);

          // --- Columns CSV ---
          const columnData = this.csvParser.parseColumnsCsv(colCsv);
          this.buildColumnsMap(columnData);

          // --- Doc format mapping CSV ---
          try {
            this.docFormatMappings = this.csvParser.parseDocFormatMapping(mappingCsv || '');
            console.log('Loaded doc format mappings:', Object.keys(this.docFormatMappings));
          } catch (e) {
            console.warn('Failed to parse doc format mappings', e);
            this.docFormatMappings = {};
          }

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

  private buildColumnsMap(csvData: any[]): void {
    const map: { [reportName: string]: string[] } = {};
    const docMap: { [reportName: string]: string } = {};
    csvData.forEach(row => {
      const reportName = row.reportName;
      const cols = (row.columns || row.selectedColumns || '').toString();
      if (!reportName) return;
      // support both pipe and comma separated lists
      const sep = cols.includes('|') ? '|' : ',';
      map[reportName] = cols
        .split(sep)
        .map((c: string) => c.trim())
        .filter(Boolean);
      if (row.docType) {
        docMap[reportName] = row.docType;
      }
    });
    this.allColumnsByReport = map;
    this.allDocTypeByReport = docMap;
    console.log('Built columns map for reports:', Object.keys(map));
  }

  // ---------------- HANDLE REPORT CHANGE ----------------
  private onReportChange(reportName: string): void {
    if (!reportName) {
      this.parameterFields = [];
      this.reportColumnsList = [];
      this.parametersGroup.reset();
      this.reportColumns.clear();
      return;
    }

    // PARAMETERS
    const reportRows = this.csvParser.getReportData(this.csvData, reportName);
    const paramRows = reportRows.filter(r => r.parameter);
    this.parameterFields = paramRows.map(r => ({
      parameter: r.parameter,
      defaultValue: r.defaultValue
    }));

    const group = this.parametersGroup;
    Object.keys(group.controls).forEach(key => group.removeControl(key));
    paramRows.forEach(row => {
      group.addControl(row.parameter, this.fb.control(row.defaultValue || ''));
    });

    // COLUMNS (from columns CSV)
    this.reportColumnsList = this.findColumnsForReport(reportName);
    console.log('onReportChange', { reportName, reportColumnsList: this.reportColumnsList });
    // set report format based on doc_type
    const docType = this.findDocTypeForReport(reportName);
    const format = docType === 'template' ? 'DOX' : docType === 'standard report' ? 'ROX' : '';
    const ctrl = this.form.get('reportFormat');
    if (ctrl) {
      ctrl.setValue(format);
    }
    // populate output formats dropdown based on reportFormat
    const outputCtrl = this.form.get('outputFormat');
    this.outputFormatsList = [];
    if (format) {
      const key = Object.keys(this.docFormatMappings).find(k => k.toLowerCase() === format.toLowerCase());
      const opts = key ? this.docFormatMappings[key] : [];
      this.outputFormatsList = opts || [];
      if (outputCtrl) {
        outputCtrl.setValue(this.outputFormatsList.length ? this.outputFormatsList[0] : '');
      }
    } else if (outputCtrl) {
      outputCtrl.setValue('');
    }

    this.reportColumns.clear();
  }

  private findDocTypeForReport(reportName: string): string | undefined {
    if (!reportName) return undefined;
    if (this.allDocTypeByReport[reportName]) return this.allDocTypeByReport[reportName];
    const lower = reportName.toLowerCase();
    const exactKey = Object.keys(this.allDocTypeByReport).find(k => k.toLowerCase() === lower);
    if (exactKey) return this.allDocTypeByReport[exactKey];
    const partialKey = Object.keys(this.allDocTypeByReport).find(k => k.toLowerCase().includes(lower) || lower.includes(k.toLowerCase()));
    if (partialKey) return this.allDocTypeByReport[partialKey];
    return undefined;
  }

  private findColumnsForReport(reportName: string): string[] {
    if (!reportName) return [];
    // Exact match
    if (this.allColumnsByReport[reportName]) return this.allColumnsByReport[reportName];

    const lower = reportName.toLowerCase();
    // Case-insensitive exact match
    const exactKey = Object.keys(this.allColumnsByReport).find(k => k.toLowerCase() === lower);
    if (exactKey) return this.allColumnsByReport[exactKey];

    // Partial match (either direction)
    const partialKey = Object.keys(this.allColumnsByReport).find(
      k => k.toLowerCase().includes(lower) || lower.includes(k.toLowerCase())
    );
    if (partialKey) return this.allColumnsByReport[partialKey];

    return [];
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
    const scheduleObj: Record<string, any> = {};
    const scheduleType = this.form.value.scheduleType;

    if (scheduleType) {
      scheduleObj['scheduleType'] = scheduleType.toUpperCase().replace(/\s+/g, '_');

      if (scheduleType === 'One Time') {
        scheduleObj['runOnDate'] = this.form.value.runOnDate;
        scheduleObj['onceADay'] = this.form.value.onceADay;
      } else if (scheduleType === 'Daily') {
        scheduleObj['frequencyInDays'] = Number(this.form.value.frequencyInDays) || 1;
        scheduleObj['scheduleStartDate'] = this.form.value.scheduleStartDate;
        scheduleObj['scheduleEndDate'] = this.form.value.scheduleEndDate;
        scheduleObj['onceADay'] = this.form.value.onceADay;
      } else if (scheduleType === 'Repeat Window') {
        scheduleObj['runOnDate'] = this.form.value.runOnDate;
        scheduleObj['repeatStartTime'] = this.form.value.repeatStartTime;
        scheduleObj['repeatEndTime'] = this.form.value.repeatEndTime;
        scheduleObj['intervalInSeconds'] = Number(this.form.value.intervalInSeconds) || 60;
      }
    }

    // If schedule type is Immediate, send blank value for schedule
    if (scheduleType === 'Immediate') {
      return {
        informationObjectName: `${this.form.value.reportName}.dox`,
        outputName: this.form.value.outputName || null,
        selectedColumns: this.form.value.reportColumns || [],
        outputFormat: this.form.value.outputFormat || null,
        parameters: this.form.value.parameters || {},
        schedule: 'IMMEDIATE'
      };
    }

    return {
      informationObjectName: `${this.form.value.reportName}.dox`,
      outputName: this.form.value.outputName || null,
      selectedColumns: this.form.value.reportColumns || [],
      outputFormat: this.form.value.outputFormat || null,
      parameters: this.form.value.parameters || {},
      schedule: Object.keys(scheduleObj).length > 1 ? scheduleObj : null
    };
  }

  onCancel(): void {
    this.resetForm();
  }

  private resetForm(): void {
    this.form.reset();
    this.parameterFields = [];
    this.reportColumnsList = [];
    this.sentPayload = null;
    this.apiResponse = null;
    this.errorMessage = null;
  }
}

import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, OnChanges, SimpleChanges, ChangeDetectorRef, HostListener, ViewChild, ElementRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormArray, FormGroup, FormBuilder } from "@angular/forms";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { ColumnDataService } from "../../../services/column-data.service";

@Component({
  selector: "app-report-columns",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./report-columns.component.html",
  styleUrls: ["./report-columns.component.scss"]
})
export class ReportColumnsComponent implements OnInit, OnDestroy, OnChanges {
  @Input() reportName: string = "";
  @Input() reportColumns!: FormArray;
  @Input() form!: FormGroup;
  @Output() columnToggled = new EventEmitter<{ column: string; event: Event }>();
  @Output() docTypeChanged = new EventEmitter<string | undefined>();
  @Output() outputFormatsUpdated = new EventEmitter<string[]>();
  @ViewChild('dropdownSection', { static: false }) dropdownSection!: ElementRef;

  columnsList: string[] = [];
  isLoadingColumns = false;
  columnError: string | null = null;
  isDropdownOpen = false;
  private destroy$ = new Subject<void>();

  constructor(
    private columnDataService: ColumnDataService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    if (this.reportName) {
      this.loadColumnsForReport(this.reportName);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["reportName"] && !changes["reportName"].firstChange) {
      this.loadColumnsForReport(changes["reportName"].currentValue);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.dropdownSection && !this.dropdownSection.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
    }
  }

  getSelectedColumnsLabel(): string {
    const selectedCount = this.columnsList.filter(col => this.isColumnSelected(col)).length;
    if (selectedCount === 0) {
      return "Select Columns";
    } else if (selectedCount === 1) {
      return "1 Column Selected";
    } else {
      return `${selectedCount} Columns Selected`;
    }
  }

  private loadColumnsForReport(reportName: string): void {
    if (!reportName) {
      this.columnsList = [];
      this.reportColumns.clear();
      this.cdr.detectChanges();
      return;
    }

    this.isLoadingColumns = true;
    this.columnError = null;

    try {
      this.columnsList = this.columnDataService.getColumnsByReport(reportName);
      const docType = this.columnDataService.getDocTypeByReport(reportName);
      this.docTypeChanged.emit(docType);
      const reportFormat = this.columnDataService.getFormatByDocType(docType);
      const outputOptions = this.columnDataService.getOutputFormatOptions(reportFormat);
      this.outputFormatsUpdated.emit(outputOptions);
      this.reportColumns.clear();
      this.isLoadingColumns = false;
      this.cdr.detectChanges();
    } catch (err) {
      console.error("Failed to load columns:", err);
      this.columnError = "Failed to load columns for this report";
      this.columnsList = [];
      this.reportColumns.clear();
      this.isLoadingColumns = false;
      this.cdr.detectChanges();
    }
  }

  get isFormInvalid(): boolean {
    const field = this.form.get("reportColumns");
    return !!(field && field.invalid && field.touched);
  }

  isColumnSelected(column: string): boolean {
    return this.reportColumns.value.includes(column);
  }

  onColumnToggle(column: string, event: Event): void {
    this.columnToggled.emit({ column, event });
  }
}

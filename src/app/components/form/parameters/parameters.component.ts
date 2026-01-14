import { Component, Input, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApiParameter } from '../../../models/report.model';
import { ReportScheduleService } from '../../../services/report-schedule.service';
import { LoadingSpinnerComponent } from '../../shared/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-parameters',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LoadingSpinnerComponent],
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.scss']
})
export class ParametersComponent implements OnInit, OnDestroy, OnChanges {
  @Input() reportName: string = '';
  @Input() parametersGroup!: FormGroup;

  parameters: ApiParameter[] = [];
  isLoadingParameters = false;
  parameterError: string | null = null;
  private destroy$ = new Subject<void>();

  constructor(
    private reportScheduleService: ReportScheduleService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    if (this.reportName) {
      this.loadParameters(this.reportName);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['reportName'] && !changes['reportName'].firstChange) {
      this.loadParameters(changes['reportName'].currentValue);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Load parameters from API based on report name
   */
  private loadParameters(reportName: string): void {
    if (!reportName) {
      this.parameters = [];
      this.clearParameterControls();
      return;
    }

    this.isLoadingParameters = true;
    this.parameterError = null;

    this.reportScheduleService.fetchParameters(reportName)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (params: ApiParameter[]) => {
          this.parameters = params;
          this.buildParameterFormControls(params);
          this.isLoadingParameters = false;
        },
        error: (err) => {
          console.error('Failed to load parameters:', err);
          this.parameterError = `Failed to load parameters: ${err?.error?.message || err?.message || 'Unknown error'}`;
          this.parameters = [];
          this.clearParameterControls();
          this.isLoadingParameters = false;
        }
      });
  }

  /**
   * Build form controls for parameters with appropriate validators
   */
  private buildParameterFormControls(params: ApiParameter[]): void {
    this.clearParameterControls();

    params.forEach(param => {
      const validators = this.getValidatorsForType(param.type, param.required);
      const defaultValue = this.normalizeDefaultValue(param.defaultValue, param.type);

      this.parametersGroup.addControl(
        param.name,
        this.fb.control({ value: defaultValue, disabled: false }, validators)
      );
    });
  }

  /**
   * Get appropriate validators based on parameter type
   */
  private getValidatorsForType(type: string, required: boolean = false) {
    const validators = [];

    if (required) {
      validators.push(Validators.required);
    }

    const lowerType = type?.toLowerCase() || '';
    if (lowerType === 'number') {
      validators.push(Validators.pattern(/^-?\d+(\.\d+)?$/));
    }

    return validators.length > 0 ? validators : null;
  }

  /**
   * Normalize default value based on data type
   */
  private normalizeDefaultValue(value: any, type: string): any {
    if (value === null || value === undefined || value === '') {
      return this.getDefaultForType(type);
    }

    const lowerType = type?.toLowerCase() || '';
    
    if (lowerType === 'number') {
      return isNaN(value) ? null : Number(value);
    }
    
    if (lowerType === 'boolean') {
      if (typeof value === 'boolean') return value;
      return value === 'true' || value === true || value === 1;
    }
    
    if (lowerType === 'date') {
      return this.formatDateForInput(value);
    }

    return String(value);
  }

  /**
   * Get default value for each type
   */
  private getDefaultForType(type: string): any {
    const lowerType = type?.toLowerCase() || '';
    switch (lowerType) {
      case 'number':
        return null;
      case 'boolean':
        return false;
      case 'date':
        return '';
      case 'string':
      default:
        return '';
    }
  }

  /**
   * Format date string to YYYY-MM-DD format for HTML date input
   */
  private formatDateForInput(dateValue: any): string {
    if (!dateValue) return '';

    try {
      const date = new Date(dateValue);
      if (isNaN(date.getTime())) return '';
      
      return date.toISOString().split('T')[0];
    } catch {
      return '';
    }
  }

  /**
   * Clear all parameter controls from form group
   */
  private clearParameterControls(): void {
    if (this.parametersGroup) {
      Object.keys(this.parametersGroup.controls).forEach(key => {
        this.parametersGroup.removeControl(key);
      });
    }
  }

  /**
   * Get display label for parameter
   * Priority: displayName (if not empty) > name
   */
  getParameterLabel(param: ApiParameter): string {
    if (param.displayName && param.displayName.trim()) {
      return param.displayName;
    }
    return param.name || '';
  }

  /**
   * Get form control for parameter
   */
  getParameterControl(paramName: string) {
    return this.parametersGroup.get(paramName);
  }

  /**
   * Check if parameter type is text/string
   */
  isTextType(type: string): boolean {
    return type?.toLowerCase() === 'string';
  }

  /**
   * Check if parameter type is date
   */
  isDateType(type: string): boolean {
    return type?.toLowerCase() === 'date';
  }

  /**
   * Check if parameter type is number
   */
  isNumberType(type: string): boolean {
    return type?.toLowerCase() === 'number';
  }

  /**
   * Check if parameter type is boolean
   */
  isBooleanType(type: string): boolean {
    return type?.toLowerCase() === 'boolean';
  }

  /**
   * Get readable type name for display
   */
  getTypeName(type: string): string {
    const typeMap: { [key: string]: string } = {
      'string': 'Text',
      'number': 'Number',
      'date': 'Date',
      'boolean': 'Boolean'
    };
    return typeMap[type?.toLowerCase()] || type;
  }

  /**
   * Check if parameter has an error
   */
  hasError(paramName: string): boolean {
    const control = this.getParameterControl(paramName);
    return !!(control && control.invalid && control.touched);
  }

  /**
   * Get error message for parameter
   */
  getErrorMessage(paramName: string, param: ApiParameter): string {
    const control = this.getParameterControl(paramName);
    if (!control || !control.errors) return '';

    if (control.errors['required']) {
      return `${this.getParameterLabel(param)} is required`;
    }
    if (control.errors['pattern']) {
      return `${this.getParameterLabel(param)} must be a valid number`;
    }

    return 'Invalid value';
  }
}
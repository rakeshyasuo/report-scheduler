import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-report-columns',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './report-columns.component.html',
  styleUrls: ['./report-columns.component.scss']
})
export class ReportColumnsComponent {
  @Input() columnsList: string[] = [];
  @Input() reportColumns!: FormArray;
  @Input() form!: FormGroup;
  @Output() columnToggled = new EventEmitter<{ column: string; event: Event }>();

  get isFormInvalid(): boolean {
    const field = this.form.get('reportColumns');
    return !!(field && field.invalid && field.touched);
  }

  isColumnSelected(column: string): boolean {
    return this.reportColumns.value.includes(column);
  }

  onColumnToggle(column: string, event: Event): void {
    this.columnToggled.emit({ column, event });
  }
}
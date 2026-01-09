import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-schedule-info',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './schedule-info.component.html',
  styleUrls: ['./schedule-info.component.scss']
})
export class ScheduleInfoComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() isSubmitting = false;
  @Output() submitted = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();

  minTime = ''; // Format: "14:30"

  timeZones = [
    { label: 'IST (GMT +5:30)', value: 'IST', offset: 330 },
    { label: 'UTC (GMT +0:00)', value: 'UTC', offset: 0 },
    { label: 'EST (GMT -5:00)', value: 'EST', offset: -300 }
  ];

  ngOnInit(): void {
    this.form.get('timeZone')?.valueChanges.subscribe(() => this.calculateMinTime());
    this.form.get('runOnDate')?.valueChanges.subscribe(() => this.calculateMinTime());
    this.form.get('scheduleStartDate')?.valueChanges.subscribe(() => this.calculateMinTime());
  }

  get scheduleType(): string {
    return this.form.get('scheduleType')?.value || '';
  }

  private calculateMinTime(): void {
    const tzVal = this.form.get('timeZone')?.value;
    const tz = this.timeZones.find(t => t.value === tzVal);
    if (!tz) {
      this.minTime = '';
      return;
    }

    const nowUtc = new Date();
    const tzNow = new Date(nowUtc.getTime() + tz.offset * 60000);
    const todayStr = tzNow.toISOString().split('T')[0];

    let relevantDate: string | null = null;

    if (this.scheduleType === 'One Time' || this.scheduleType === 'Repeat Window') {
      relevantDate = this.form.get('runOnDate')?.value;
    } else if (this.scheduleType === 'Daily') {
      relevantDate = this.form.get('scheduleStartDate')?.value;
    }

    if (relevantDate && relevantDate === todayStr) {
      this.minTime = tzNow.toTimeString().slice(0, 5); // "HH:mm"
    } else {
      this.minTime = '';
    }
  }

  isPastTime(controlName: string, dateControlName: string): boolean {
    const timeVal = this.form.get(controlName)?.value;
    const dateVal = this.form.get(dateControlName)?.value;

    if (!timeVal || !dateVal || !this.minTime) return false;

    return timeVal < this.minTime;
  }

  showFutureTimeErrorOnceADay(): boolean {
    if (this.scheduleType === 'Daily') {
      return this.isPastTime('onceADay', 'scheduleStartDate');
    }
    return this.isPastTime('onceADay', 'runOnDate');
  }

  showFutureTimeErrorStartTime(): boolean {
    return this.isPastTime('repeatStartTime', 'runOnDate');
  }

  onSubmit(): void {
    this.normalizeTime();
    this.submitted.emit();
  }

  private normalizeTime(): void {
    const trimToHHmm = (v: string) => (v ? v.slice(0, 5) : v);
    this.form.patchValue({
      onceADay: trimToHHmm(this.form.value.onceADay),
      repeatStartTime: trimToHHmm(this.form.value.repeatStartTime),
      repeatEndTime: trimToHHmm(this.form.value.repeatEndTime)
    });
  }

  onCancel(): void {
    this.cancelled.emit();
  }
}
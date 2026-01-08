import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-info',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {

  @Input() form!: FormGroup;
  @Input() reportNames: string[] = [];
  @Input() outputOptions: string[] = [];

  ngOnInit(): void {
    if (!this.form) return;

    this.form.get('emailEnabled')?.valueChanges.subscribe(enabled => {
      const ctrl = this.form.get('emailUserId');
      enabled ? ctrl?.setValidators([Validators.required]) : ctrl?.clearValidators();
      if (!enabled) ctrl?.reset();
      ctrl?.updateValueAndValidity();
    });

    this.form.get('zipEnabled')?.valueChanges.subscribe(enabled => {
      const ctrl = this.form.get('zipOption');
      enabled ? ctrl?.setValidators([Validators.required]) : ctrl?.clearValidators();
      if (!enabled) ctrl?.reset();
      ctrl?.updateValueAndValidity();
    });

    this.form.get('ftpEnabled')?.valueChanges.subscribe(enabled => {
      const ctrl = this.form.get('ftpOption');
      enabled ? ctrl?.setValidators([Validators.required]) : ctrl?.clearValidators();
      if (!enabled) ctrl?.reset();
      ctrl?.updateValueAndValidity();
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.form.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }
}

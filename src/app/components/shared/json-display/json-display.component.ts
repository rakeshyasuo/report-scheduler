import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-json-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './json-display.component.html',
  styleUrls: ['./json-display.component.scss']
})
export class JsonDisplayComponent {
  @Input() data: any = null;
  @Input() title = 'Data';
  @Input() isSuccess = false;
}
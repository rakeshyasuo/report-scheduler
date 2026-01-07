import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SchedulePayload } from '../models/report.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportScheduleService {
  private apiUrl = 'http://OTX-H6FZ314:8181/api/reports/run';

  constructor(private http: HttpClient) {}

  submitSchedule(payload: SchedulePayload): Observable<any> {
    return this.http.post<any>(this.apiUrl, payload, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
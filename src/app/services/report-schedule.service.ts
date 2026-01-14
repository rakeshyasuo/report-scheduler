import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SchedulePayload, ApiParameter } from '../models/report.model';
import { Observable } from 'rxjs';
import { ApiConfigService } from './api-config.service';

@Injectable({
  providedIn: 'root'
})
export class ReportScheduleService {
  constructor(
    private http: HttpClient,
    private apiConfig: ApiConfigService
  ) {}

  submitSchedule(payload: SchedulePayload): Observable<any> {
    const apiUrl = this.apiConfig.getApiUrl('schedule');
    if (!apiUrl) {
      throw new Error('Schedule API endpoint not configured');
    }
    return this.http.post<any>(apiUrl, payload, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
  /**
   * Fetch parameters for a report from API
   */
  fetchParameters(reportName: string): Observable<ApiParameter[]> {
    const apiUrl = this.apiConfig.getApiUrl('getParameters');
    if (!apiUrl) {
      throw new Error('Parameters API endpoint not configured');
    }
    
    // Use informationObjectName query parameter per API requirement
    const url = apiUrl.includes('?') 
      ? `${apiUrl}&informationObjectName=${encodeURIComponent(reportName)}`
      : `${apiUrl}?informationObjectName=${encodeURIComponent(reportName)}`;
    
    return this.http.get<ApiParameter[]>(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
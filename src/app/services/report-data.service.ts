import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CsvRow } from '../models/report.model';

@Injectable({
  providedIn: 'root'
})
export class ReportDataService {
  constructor(private http: HttpClient) {}

  loadCsv(filePath: string): Observable<string> {
    return this.http.get(filePath, { responseType: 'text' });
  }
}
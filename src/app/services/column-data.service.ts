import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ColumnCsvRow } from '../models/report.model';
import { CsvParserService } from './csv-parser.service';
import { ReportDataService } from './report-data.service';

@Injectable({
  providedIn: 'root'
})
export class ColumnDataService {
  private allColumnsByReport: { [reportName: string]: string[] } = {};
  private allDocTypeByReport: { [reportName: string]: string } = {};
  private docFormatMappings: { [inputFormat: string]: string[] } = {};
  private loaded$ = new BehaviorSubject<boolean>(false);

  constructor(
    private csvParser: CsvParserService,
    private reportData: ReportDataService
  ) {}

  /**
   * Load all column data from CSVs
   */
  loadColumnData(): Observable<void> {
    return new Observable(observer => {
      this.reportData.loadCsv('assets/report_columns.csv').subscribe({
        next: (colCsv) => {
          try {
            const columnData = this.csvParser.parseColumnsCsv(colCsv);
            this.buildColumnsMap(columnData);
            observer.next(undefined);
            observer.complete();
          } catch (err) {
            observer.error(new Error('Failed to parse columns CSV'));
          }
        },
        error: (err) => observer.error(err)
      });
    });
  }

  /**
   * Load doc format mappings
   */
  loadDocFormatMappings(): Observable<void> {
    return new Observable(observer => {
      this.reportData.loadCsv('assets/doc_format_mapping.csv').subscribe({
        next: (mappingCsv) => {
          try {
            this.docFormatMappings = this.csvParser.parseDocFormatMapping(mappingCsv || '');
            console.log('Loaded doc format mappings:', Object.keys(this.docFormatMappings));
            observer.next(undefined);
            observer.complete();
          } catch (err) {
            console.warn('Failed to parse doc format mappings', err);
            this.docFormatMappings = {};
            observer.next(undefined);
            observer.complete();
          }
        },
        error: (err) => observer.error(err)
      });
    });
  }

  /**
   * Build internal maps of columns and doc types by report
   */
  private buildColumnsMap(csvData: ColumnCsvRow[]): void {
    const map: { [reportName: string]: string[] } = {};
    const docMap: { [reportName: string]: string } = {};
    
    csvData.forEach(row => {
      const reportName = row.reportName;
      const cols = (row.columns || '').toString();
      if (!reportName) return;
      
      // Support both pipe and comma separated lists
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

  /**
   * Get columns for a specific report
   */
  getColumnsByReport(reportName: string): string[] {
    if (!reportName) return [];
    
    // Exact match
    if (this.allColumnsByReport[reportName]) {
      return this.allColumnsByReport[reportName];
    }

    const lower = reportName.toLowerCase();
    
    // Case-insensitive exact match
    const exactKey = Object.keys(this.allColumnsByReport).find(
      k => k.toLowerCase() === lower
    );
    if (exactKey) return this.allColumnsByReport[exactKey];

    // Partial match (either direction)
    const partialKey = Object.keys(this.allColumnsByReport).find(
      k => k.toLowerCase().includes(lower) || lower.includes(k.toLowerCase())
    );
    if (partialKey) return this.allColumnsByReport[partialKey];

    return [];
  }

  /**
   * Get doc type for a specific report
   */
  getDocTypeByReport(reportName: string): string | undefined {
    if (!reportName) return undefined;
    
    if (this.allDocTypeByReport[reportName]) {
      return this.allDocTypeByReport[reportName];
    }
    
    const lower = reportName.toLowerCase();
    const exactKey = Object.keys(this.allDocTypeByReport).find(
      k => k.toLowerCase() === lower
    );
    if (exactKey) return this.allDocTypeByReport[exactKey];
    
    const partialKey = Object.keys(this.allDocTypeByReport).find(
      k => k.toLowerCase().includes(lower) || lower.includes(k.toLowerCase())
    );
    if (partialKey) return this.allDocTypeByReport[partialKey];
    
    return undefined;
  }

  /**
   * Get output format based on doc type
   */
  getFormatByDocType(docType: string | undefined): string {
    if (!docType) return '';
    return docType === 'template' ? 'DOX' : docType === 'standard report' ? 'ROX' : '';
  }

  /**
   * Get output format options based on report format
   */
  getOutputFormatOptions(reportFormat: string): string[] {
    if (!reportFormat) return [];
    
    const key = Object.keys(this.docFormatMappings).find(
      k => k.toLowerCase() === reportFormat.toLowerCase()
    );
    return key ? this.docFormatMappings[key] : [];
  }

  /**
   * Check if data is loaded
   */
  isLoaded(): Observable<boolean> {
    return this.loaded$.asObservable();
  }
}

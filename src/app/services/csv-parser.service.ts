import { Injectable } from '@angular/core';
import { CsvRow,ParameterCsvRow,ColumnCsvRow } from '../models/report.model';

@Injectable({
  providedIn: 'root'
})
export class CsvParserService {
  parseCsvData(data: string): CsvRow[] {
    try {
      const lines = data.trim().split('\n');
      if (lines.length < 2) {
        throw new Error('Invalid CSV format');
      }

      const headers = this.parseCsvLine(lines[0]);
      const reportNameIdx = headers.findIndex(h =>
        h.toLowerCase().includes('report name')
      );
      const paramIdx = headers.findIndex(h =>
        h.toLowerCase().includes('parameter')
      );
      const defaultIdx = headers.findIndex(h =>
        h.toLowerCase().includes('default value')
      );
      const selectedColsIdx = headers.findIndex(h =>
        h.toLowerCase().includes('selected columns')
      );

      const csvData: CsvRow[] = [];
      for (let i = 1; i < lines.length; i++) {
        const values = this.parseCsvLine(lines[i]);
        if (values[reportNameIdx]) {
          csvData.push({
            reportName: values[reportNameIdx]?.trim() || '',
            parameter: values[paramIdx]?.trim() || '',
            defaultValue: values[defaultIdx]?.trim() || '',
            selectedColumns: values[selectedColsIdx]?.trim() || ''
          });
        }
      }
      return csvData;
    } catch (err) {
      throw new Error('Error parsing CSV data. Please check the file format.');
    }
  }

  parseCsvLine(line: string): string[] {
    const result: string[] = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        result.push(current);
        current = '';
      } else {
        current += char;
      }
    }
    result.push(current);
    return result.map(v => v.replace(/^"|"$/g, '').trim());
  }

  extractReportNames(csvData: CsvRow[]): string[] {
    return [
      ...new Set(csvData.map(r => r.reportName).filter(Boolean))
    ].sort();
  }

  getReportData(csvData: CsvRow[], reportName: string) {
    return csvData.filter(r => r.reportName === reportName);
  }

  // -------------------------
  // Methods for columns CSV
  // -------------------------
  parseColumnsCsv(data: string): ColumnCsvRow[] {
    const lines = data.trim().split('\n');
    const headers = this.parseCsvLine(lines[0]);
    const reportIdx = headers.findIndex(h => h.toLowerCase().includes('report name'));
    const columnsIdx = headers.findIndex(h => h.toLowerCase().includes('selected columns'));
    const docTypeIdx = headers.findIndex(h => h.toLowerCase().includes('doc') || h.toLowerCase().includes('doc_type') || h.toLowerCase().includes('doc type'));

    const result: ColumnCsvRow[] = [];
    for (let i = 1; i < lines.length; i++) {
      const values = this.parseCsvLine(lines[i]);
      const reportName = reportIdx >= 0 ? (values[reportIdx] || '').trim() : '';
      if (reportName) {
        result.push({
          reportName,
          columns: columnsIdx >= 0 ? (values[columnsIdx] || '').trim() : '',
          docType: docTypeIdx >= 0 ? (values[docTypeIdx] || '').trim().toLowerCase() : undefined
        });
      }
    }
    return result;
  }

  parseDocFormatMapping(data: string): { [inputFormat: string]: string[] } {
    const lines = data.trim().split('\n');
    if (lines.length < 2) return {};
    const headers = this.parseCsvLine(lines[0]);
    const inputIdx = headers.findIndex(h => h.toLowerCase().includes('input'));
    const outputIdx = headers.findIndex(h => h.toLowerCase().includes('output'));
    const map: { [inputFormat: string]: string[] } = {};
    for (let i = 1; i < lines.length; i++) {
      const vals = this.parseCsvLine(lines[i]);
      const input = inputIdx >= 0 ? (vals[inputIdx] || '').trim() : '';
      const output = outputIdx >= 0 ? (vals[outputIdx] || '').trim() : '';
      if (!input) continue;
      map[input.trim().toLowerCase()] = output ? output.split('|').map(v => v.trim()).filter(Boolean) : [];
    }
    return map;
  }
}
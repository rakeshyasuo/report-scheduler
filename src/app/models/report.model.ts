export interface CsvRow {
  reportName: string;
  parameter: string;
  defaultValue: string;
  selectedColumns: string;
}

export interface SchedulePayload {
  informationObjectName: string;
  outputName: string | null;
  outputFormat?: string | null;
  selectedColumns: string[];
  parameters: Record<string, string>;
  schedule: Record<string, any> | null | string;
}

export interface ParameterField {
  parameter: string;
  defaultValue: string;
}

export enum ScheduleType {
  ONE_TIME = 'One Time',
  DAILY = 'Daily',
  REPEAT_WINDOW = 'Repeat Window',
  IMMEDIATE = 'Immediate'
}
// models/report.model.ts
export interface ParameterCsvRow {
  reportName: string;
  parameter: string;
  defaultValue: string;
}

export interface ColumnCsvRow {
  reportName: string;
  columns: string; // comma-separated or pipe-separated string
  docType?: string; // 'template' | 'standard report'
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

interface ApiEndpoint {
  endpoint: string;
  url: string;
  method: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {
  private apiEndpoints: Map<string, ApiEndpoint> = new Map();
  private loaded$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  /**
   * Load API configuration from CSV file
   */
  loadApiConfig(): Observable<string> {
    return this.http.get('assets/api-config.csv', { responseType: 'text' }).pipe(
      tap(csvData => {
        this.parseApiConfig(csvData);
        this.loaded$.next(true);
      })
    );
  }

  /**
   * Parse CSV data and populate endpoints map
   */
  private parseApiConfig(csvData: string): void {
    const lines = csvData.trim().split('\n');
    lines.forEach((line, index) => {
      if (index === 0) return; // Skip header
      const [endpoint, url, method, description] = line.split(',').map(val => val.trim());
      if (endpoint && url) {
        this.apiEndpoints.set(endpoint, {
          endpoint: endpoint,
          url: url,
          method: method || 'GET',
          description: description || ''
        });
      }
    });
    console.log('API Config loaded:', Array.from(this.apiEndpoints.keys()));
  }

  /**
   * Get API URL by endpoint name
   */
  getApiUrl(endpointName: string): string | undefined {
    return this.apiEndpoints.get(endpointName)?.url;
  }

  /**
   * Get API method by endpoint name
   */
  getApiMethod(endpointName: string): string | undefined {
    return this.apiEndpoints.get(endpointName)?.method;
  }

  /**
   * Get all endpoints
   */
  getAllEndpoints(): ApiEndpoint[] {
    return Array.from(this.apiEndpoints.values());
  }

  /**
   * Check if config is loaded
   */
  isLoaded(): Observable<boolean> {
    return this.loaded$.asObservable();
  }
}

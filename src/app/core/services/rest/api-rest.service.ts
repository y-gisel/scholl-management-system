import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiRestService {
  constructor(private http: HttpClient) {}

  /* =======================================================================
    CRUD
  ======================================================================= */

  get<T>(url: string): Observable<T> {
    const headers = this.getHeaders();
    return this.http.get<T>(environment.baseUrl + url, { headers });
  }

  postFormData<T>(url: string, optionParams: any): Observable<T> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded; charset=UTF-8'
    );
    const params = new HttpParams({
      fromObject: optionParams,
    });
    return this.http.post<T>(environment.baseUrl + url, params, { headers });
  }

  put<T>(url: string, body: any): Observable<T> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded; charset=UTF-8'
    );
    return this.http.put<T>(environment.baseUrl + url, body, { headers });
  }

  delete<T>(url: string): Observable<T> {
    const headers = this.getHeaders();
    return this.http.delete<T>(environment.baseUrl + url, { headers });
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UtilService } from './util.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private baseUrl = 'http://localhost:3000/api/';
  private header: { headers: HttpHeaders; };

  constructor(
    private http: HttpClient,
    private utilService: UtilService
  ) {
    this.header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }

  getMethod(url, id) {
    return this.http.get(`${this.baseUrl}${url}/${id}`, this.header).toPromise();
  }

  getAllMethod(url) {
    return this.http.get(`${this.baseUrl}${url}`, this.header).toPromise();
  }

  getAllMethodWithObservables(url): Observable<any> {
    return this.http.get(`${this.baseUrl}${url}`, this.header);
  }

  getAllMethodWithoutToken(url) {
    return this.http.get(`${this.baseUrl}${url}`, this.header).toPromise();
  }

  postAllMethodWithoutToken(url, data) {
    return this.http.post(`${this.baseUrl}${url}`, data, this.header).toPromise();
  }

  postAllMethod(url, data) {
    return this.http.post(`${this.baseUrl}${url}`, data, this.header).toPromise();
  }

  postAllWithoutData(url) {
    return this.http.post(`${this.baseUrl}${url}`, this.header).toPromise();
  }

  updateMethod(url, data) {
    return this.http.put(`${this.baseUrl}${url}`, data, this.header).toPromise();
  }

  updateMethodWithoutToken(url, data) {
    return this.http.put(`${this.baseUrl}${url}`, data, this.header).toPromise();
  }

  deleteMethodWithoutToken(url) {
    return this.http.delete(`${this.baseUrl}${url}`, this.header).toPromise();
  }
}

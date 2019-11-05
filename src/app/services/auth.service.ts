import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'https://business-directory-backend.herokuapp.com/api/';
  private Header: { headers: HttpHeaders; };

  private login: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private router: Router,
    private util: UtilService
  ) {
    this.Header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    if (this.util.getUserObject() !== null) {
      this.setLoginStatus(true);
    }
   }

  signIn(data) {
    const url = `auth/login`;
    return this.http.post(`${this.baseUrl}${url}`, data, this.Header).toPromise();
  }

  setLoginStatus(value) {
    this.login.next(value);
  }

  listenToLoginStatus(): Observable<boolean> {
    return this.login.asObservable();
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/admin');
  }
}

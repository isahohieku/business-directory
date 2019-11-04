import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:3000/api/';
  private Header: { headers: HttpHeaders; };

  private login: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.Header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
   }


  signIn(data) {
    const url = `auth/login`;
    return this.http.post(`${this.baseUrl}${url}`, data, this.Header).toPromise();
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/admin');
  }
}

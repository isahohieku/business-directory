import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  setUserObject(data) {
    localStorage.setItem('userObj', JSON.stringify(data));
  }

  getUserObject() {
    if (localStorage.getItem('userObj') !== undefined && localStorage.getItem('userObj') !== null) {
      return JSON.parse(localStorage.getItem('userObj'));
    }
    return null;
  }

  setToken(data) {
    localStorage.setItem('token', JSON.stringify(data));
  }

  getUserToken() {
    let token;
    if ((localStorage.getItem('userObj') !== undefined) && (localStorage.getItem('userObj') !== null)) {
      token = JSON.parse(localStorage.getItem('userObj')).token;
    }

    return token;
  }

  getToken() {
    let token;
    if ((localStorage.getItem('token') !== undefined) && (localStorage.getItem('token') !== null)) {
      token = localStorage.getItem('token');
    }

    return token;
  }
}

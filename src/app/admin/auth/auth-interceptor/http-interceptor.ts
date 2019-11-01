import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UtilService } from '../../../services/util.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private util: UtilService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.util.getToken()}`
      }
    });
    return next.handle(request);
  }
}

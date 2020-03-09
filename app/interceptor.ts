import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: ApiService, private injector: Injector) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authservice = this.injector.get(ApiService);
    const tokenreq = req.clone({
        setHeaders: {
          'Content-Type' : 'application/json',
          enctype : 'multipart/form-data',
          'x-access-token': `${authservice.getToken()}`
          // Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      });
    return next.handle(tokenreq);
  }
}

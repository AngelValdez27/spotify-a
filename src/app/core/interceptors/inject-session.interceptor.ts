import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class InjectSessionInterceptor implements HttpInterceptor {

  constructor(private cookie: CookieService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    try {
      //Captura el token de la cookie y lo añade a una propiedad para mandar al 
      //midleware del back y permitir ver la infoemacion con su autorización
      const token = this.cookie.check('token')
      let newRequest = request
      newRequest = request.clone({
        setHeaders: {
          authorization: `Bearer ${token}`
        }
      })
      return next.handle(newRequest);

    } catch (error) {
      console.log("Interceptor: Algo sucedió...", error);
      return next.handle(request);
    }
  }
}

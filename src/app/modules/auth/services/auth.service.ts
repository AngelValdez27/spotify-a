import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.api_url

  constructor(private http: HttpClient, private _cookieService: CookieService) { }

  sendCredentials(email: string, password: string): Observable<any> {
    const body = {
      email,
      password
    }
    return this.http.post(`${this.URL}/auth/login`, body).pipe(
      tap((res: any) => {
        //captura la data y el token de la respuesta
        const { tokenSession, data } = res
        //setea el token y el numero de dias de expiración, además de que indica aplicar a toda ala app '/'
        this._cookieService.set('token service', tokenSession, 4, '/')
      })
    )
  }
}

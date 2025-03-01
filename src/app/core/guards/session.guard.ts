import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor(private cookie: CookieService, private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCookieSession();//TODO verifica que tenga token
  }

  checkCookieSession(): boolean {
    try {
      //verifica si existe el token en el servicio de cookies
      const token = this.cookie.check('token')
      if (!token) {
        this.router.navigate(['/', 'auth'])
      }
      return token

    } catch (error) {
      console.log("Algo salió mal...", error);
      return false;
    }
  }
}

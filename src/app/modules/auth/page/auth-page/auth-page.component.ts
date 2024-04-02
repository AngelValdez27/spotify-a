import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
/* Services */
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  errorSesion = false;

  constructor(private _authService: AuthService, private _cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required, Validators.email
      ]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)])
    })
  }

  sendLoginData(): void {
    //const bodyData = this.loginForm.value
    const { email, password } = this.loginForm.value
    this._authService.sendCredentials(email, password).subscribe({
      next: (res) => {
        console.log("Sesión iniciada");
        //captura la data y el token de la respuesta
        const { tokenSession, data } = res
        //setea el token y el numero de dias de expiración, además de que indica aplicar a toda ala app '/'
        this._cookieService.set('token', tokenSession, 4, '/')
        this.router.navigate(['/', 'tracks'])
      },
      error: err => {
        console.log("Algo salió mal...", err);
        this.errorSesion = true
      }
    })
  }
}

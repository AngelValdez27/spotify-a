import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './page/auth-page/auth-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: AuthPageComponent
  },
  {
    ///auth viene desde el modulo principal de routing
    path: '**',
    redirectTo: '/auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

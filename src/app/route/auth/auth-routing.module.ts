import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedinGuard } from 'src/app/shared/guard/loggedin.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent , canActivate:[LoggedinGuard] },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
  constructor() {
  }
}

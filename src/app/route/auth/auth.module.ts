import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EqualpasswordDirective } from 'src/app/shared/directives/equalpassword.directive';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    EqualpasswordDirective,
    ForgotPassComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgHttpLoaderModule
  ],
  providers: [],
  exports: []
})
export class AuthModule { }

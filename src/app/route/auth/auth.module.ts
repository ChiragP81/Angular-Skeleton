import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EqualpasswordDirective } from 'src/app/shared/directives/equalpassword.directive';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    EqualpasswordDirective,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [],
  exports: []
})
export class AuthModule { }

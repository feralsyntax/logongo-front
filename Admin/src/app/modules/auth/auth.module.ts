import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ResetConfirmedComponent } from './components/reset-confirmed/reset-confirmed.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ChangePassFormComponent } from './forms/change-pass-form/change-pass-form.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { ResetConfirmedFormComponent } from './forms/reset-confirmed-form/reset-confirmed-form.component';
import { ResetRequestFormComponent } from './forms/reset-request-form/reset-request-form.component';
import { FormsModule } from '@angular/forms';
import { ErrorsModule } from '../errors/errors.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    LoginComponent,
    ResetPasswordComponent,
    ResetConfirmedComponent,
    ChangePasswordComponent,
    LoginFormComponent,
    ChangePassFormComponent,
    ResetConfirmedFormComponent,
    ResetRequestFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ErrorsModule,
  ]
})
export class AuthModule { }

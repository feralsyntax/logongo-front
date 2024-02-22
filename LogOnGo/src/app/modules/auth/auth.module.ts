import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RegFormComponent } from './forms/reg-form/reg-form.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { ChangePassFormComponent } from './forms/change-pass-form/change-pass-form.component';
import { ResetConfirmedFormComponent } from './forms/reset-confirmed-form/reset-confirmed-form.component';
import { ResetRequestFormComponent } from './forms/reset-request-form/reset-request-form.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ResetConfirmedComponent } from './components/reset-confirmed/reset-confirmed.component';
import { MatButtonModule } from '@angular/material/button';
import { NavigationModule } from '../navigation/navigation.module';
import { ErrorsModule } from '../errors/errors.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ResetConfirmedComponent,
    ChangePasswordComponent,
    RegFormComponent,
    LoginFormComponent,
    ChangePassFormComponent,
    ResetConfirmedFormComponent,
    ResetRequestFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    NavigationModule,
    ErrorsModule,
  ],
  exports: [
    ChangePasswordComponent,
  ]
})
export class AuthModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AuthInterceptor } from './helpers/auth/auth.interceptor';
import * as Notiflix from 'notiflix';
import { RouterModule } from '@angular/router';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import 'hammerjs';
import { BindQueryParamDirective } from './directives/queryParams/bind-query-param.directive';
import { ErrorsModule } from './modules/errors/errors.module';

import { NavigationModule } from './modules/navigation/navigation.module';
import { CustomFilterPipe } from './pipes/filter/custom-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BindQueryParamDirective,
    CustomFilterPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    NoopAnimationsModule,
    ErrorsModule,
    NavigationModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,  useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

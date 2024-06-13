import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { ErrorsModule } from './modules/errors/errors.module';
import { AnnouncementsModule } from './modules/announcements/announcements.module';
import { CardsModule } from './modules/cards/cards.module';
import { LogsModule } from './modules/logs/logs.module';
import { MpesaModule } from './modules/mpesa/mpesa.module';
import { ContactsModule } from './modules/contacts/contacts.module';
import { IncidentsModule } from './modules/incidents/incidents.module';
import { FuelsModule } from './modules/fuels/fuels.module';
import { FuelsReceivedModule } from './modules/fuels-received/fuels-received.module';
import { SummaryModule } from './modules/summary/summary.module';
import { AuthInterceptor } from './helpers/auth/auth.interceptor';
import { HomeComponent } from './home/home.component';
import * as Notiflix from 'notiflix';
import { UsersModule } from './modules/users/users.module';

@NgModule({
  declarations: [AppComponent, NavComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatTabsModule,
    ErrorsModule,
    AnnouncementsModule,
    CardsModule,
    LogsModule,
    MpesaModule,
    ContactsModule,
    IncidentsModule,
    FuelsModule,
    FuelsReceivedModule,
    SummaryModule,
    UsersModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MpesaRoutingModule } from './mpesa-routing.module';
import { AddMpesaLogpageComponent } from './components/add-mpesa-logpage/add-mpesa-logpage.component';
import { EmailMpesaComponent } from './components/email-mpesa/email-mpesa.component';
import { MpesaDetailsComponent } from './components/mpesa-details/mpesa-details.component';
import { FuelMpesaLogsComponent } from './components/fuel-mpesa-logs/fuel-mpesa-logs.component';
import { NoMpesaComponent } from './components/no-mpesa/no-mpesa.component';
import { MpesaInstructionsComponent } from './components/mpesa-instructions/mpesa-instructions.component';
import { ProfileMpesaComponent } from './components/profile-mpesa/profile-mpesa.component';
import { DeleteMpesaComponent } from './components/delete-mpesa/delete-mpesa.component';
import { MpesaLogCardComponent } from './components/mpesa-log-card/mpesa-log-card.component';
import { AllMpesaLogsComponent } from './components/all-mpesa-logs/all-mpesa-logs.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddMpesaComponent } from './forms/add-mpesa/add-mpesa.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { FuelModule } from '../fuel/fuel.module';
import { SearchMpesaComponent } from './components/search-mpesa/search-mpesa.component';
import { MatButtonModule } from '@angular/material/button';
import { NavigationModule } from '../navigation/navigation.module';
import { CustomFilterPipe } from './pipes/filter/custom-filter.pipe';


@NgModule({
  declarations: [
    AddMpesaLogpageComponent,
    EmailMpesaComponent,
    MpesaDetailsComponent,
    FuelMpesaLogsComponent,
    NoMpesaComponent,
    MpesaInstructionsComponent,
    ProfileMpesaComponent,
    DeleteMpesaComponent,
    MpesaLogCardComponent,
    AllMpesaLogsComponent,
    AddMpesaComponent,
    SearchMpesaComponent,
    CustomFilterPipe
  ],
  imports: [
    CommonModule,
    MpesaRoutingModule,
    NgxPaginationModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatExpansionModule,
    FuelModule,
    MatButtonModule,
    FuelModule,
    NavigationModule,
  ],
  exports: [
    AllMpesaLogsComponent,
    FuelMpesaLogsComponent,
    NoMpesaComponent,
    ProfileMpesaComponent,
    AddMpesaComponent,
    MpesaLogCardComponent,
    MpesaInstructionsComponent
  ]
})
export class MpesaModule { }

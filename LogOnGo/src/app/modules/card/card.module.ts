import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { AddCardPageComponent } from './components/add-card-page/add-card-page.component';
import { AllCardLogsComponent } from './components/all-card-logs/all-card-logs.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FuelCardLogsComponent } from './components/fuel-card-logs/fuel-card-logs.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { CreditLogCardComponent } from './components/credit-log-card/credit-log-card.component';
import { DeleteCardComponent } from './components/delete-card/delete-card.component';
import { EmailCardComponent } from './components/email-card/email-card.component';
import { NoCardComponent } from './components/no-card/no-card.component';
import { ProfileCardLogsComponent } from './components/profile-card-logs/profile-card-logs.component';
import { SearchComponent } from './components/search/search.component';
import { CardInstructionsComponent } from './components/card-instructions/card-instructions.component';
import { AddCardComponent } from './forms/add-card/add-card.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { DeleteCardFormComponent } from './forms/delete-card-form/delete-card-form.component';
import { CardReportFormComponent } from './forms/card-report-form/card-report-form.component';
import { FuelModule } from '../fuel/fuel.module';
import { MatButtonModule } from '@angular/material/button';
import { NavigationModule } from '../navigation/navigation.module';
import { CustomFilterPipe } from './pipes/filter/custom-filter.pipe';


@NgModule({
  declarations: [
    AddCardPageComponent,
    AllCardLogsComponent,
    FuelCardLogsComponent,
    CardDetailsComponent,
    CreditLogCardComponent,
    DeleteCardComponent,
    EmailCardComponent,
    NoCardComponent,
    ProfileCardLogsComponent,
    SearchComponent,
    CardInstructionsComponent,
    AddCardComponent,
    DeleteCardFormComponent,
    CardReportFormComponent,
    CustomFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    CardRoutingModule,
    NgxPaginationModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatExpansionModule,
    FuelModule,
    MatButtonModule,
    NavigationModule
  ],
  exports: [
    AllCardLogsComponent,
    FuelCardLogsComponent,
    NoCardComponent,
    ProfileCardLogsComponent,
    AddCardComponent,
    CreditLogCardComponent,
    CardInstructionsComponent,
  ]
})
export class CardModule { }

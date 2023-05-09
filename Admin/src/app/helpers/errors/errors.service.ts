import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/classes/user/user';
import { MessageService } from 'src/app/services/errors/message.service';

@Injectable({
  providedIn: 'any'
})
export class ErrorsService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  public allErrors(error: HttpErrorResponse){
    if(error.error.detail){
      this.messages.add(error.error.detail);
      setTimeout(() => {
        this.messages.clear();
      }, 4000)
    }
    if (error.error.detail === 'Invalid token.') {
      this.logout();
      location.reload();
    }
    if(error.error.detail === 'Authentication credentials were not provided.'){
      this.messages.clear();
    }
    if(error.error.email){
      this.messages.add(error.error.email);
    }
    if(error.error.username){
      this.messages.add(error.error.username);
    }
    if(error.error.password){
      this.messages.add(error.error.password);
    }
    if(error.error.old_password){
      this.messages.add(error.error.old_password.old_password);
    }
    if(error.error.password2){
      this.messages.add(error.error.password2);
    }
    if(error.error.first_name){
      this.messages.add(error.error.first_name);
    }
    if(error.error.last_name){
      this.messages.add(error.error.last_name);
    }
    if(error.error.employee_id){
      this.messages.add(error.error.employee_id);
    }
    if(error.error.petrol_station){
      this.messages.add(error.error.petrol_station);
    }
    if(error.error.fuel_type){
      this.messages.add(error.error.fuel_type);
    }
    if(error.error.pumps){
      this.messages.add(error.error.pumps);
    }
    if(error.error.initial_litres_in_tank){
      this.messages.add(error.error.initial_litres_in_tank);
    }
    if(error.error.price_per_litre){
      this.messages.add(error.error.price_per_litre);
    }
    if(error.error.eod_reading_lts){
      this.messages.add(error.error.eod_reading_lts);
    }
    if(error.error.eod_reading_yesterday){
      this.messages.add(error.error.eod_reading_yesterday);
    }
    if(error.error.transaction_number){
      this.messages.add(error.error.transaction_number);
    }
    if(error.error.customer_name){
      this.messages.add(error.error.customer_name);
    }
    if(error.error.customer_phone_number){
      this.messages.add(error.error.customer_phone_number);
    }
    if(error.error.amount_transferred_to_bank){
      this.messages.add(error.error.amount_transferred_to_bank);
    }
    if(error.error.amount){
      this.messages.add(error.error.amount);
    }
    if(error.error.card_name){
      this.messages.add(error.error.card_name);
    }
    if(error.error.card_number){
      this.messages.add(error.error.card_number);
    }
    if(error.error.litres_received){
      this.messages.add(error.error.litres_received);
    }
    if(error.error.received_from){
      this.messages.add(error.error.received_from);
    }
    if(error.error.date_received){
      this.messages.add(error.error.date_received);
    }
    if(error.error.date){
      this.messages.add(error.error.date)
    }
    if(error.error.nature){
      this.messages.add(error.error.nature);
    }
    if(error.error.description){
      this.messages.add(error.error.description);
    }
    if(error.error.your_name){
      this.messages.add(error.error.your_name);
    }
    if(error.error.your_email){
      this.messages.add(error.error.your_email);
    }
    if(error.error.incident_date){
      this.messages.add(error.error.incident_date);
    }
    if(error.error.amount_transferred_to_bank){
      this.messages.add(error.error.amount_transferred_to_bank);
    }
    if(error.error.subject){
      this.messages.add(error.error.subject);
    }
    if(error.error.announcement){
      this.messages.add(error.error.announcement);
    }
    if(error.error.message){
      this.messages.add(error.error.message);
    }
    if(error.error.admin_name){
      this.messages.add(error.error.admin_name);
    }
    if(error.error.admin_email){
      this.messages.add(error.error.admin_email);
    }
    if(error.error.balance){
      this.messages.add(error.error.balance)
    }
  }
  constructor(
    private messages: MessageService,
    private router:Router,
    ) { 
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate[('/auth')];
  }
}


import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from 'src/app/classes/card/credit-card'; 
import { RequestHandlerService } from 'src/app/helpers/requests/request-handler.service';

const apiURL = 'https://logongo-api-production.up.railway.app/api/';
// const apiURL = 'http://127.0.0.1:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  apiAllCards = apiURL + 'logs/card/all/';
  apiTodayCards = apiURL + 'logs/card/today/';
  apiUserCards = apiURL + 'logs/card/user/';
  apiCardDetails = apiURL + 'log/card/details/';
  apiFuelPumps = apiURL + 'pumps/fuel/';
  apiCardReport = apiURL + 'log/card/email/report/';
  apiDelCard = apiURL + 'log/card/delete/request/';
  apiPastCards = apiURL + 'logs/card/past/'

  constructor(
    private handler:RequestHandlerService,
    ) { }

  getAllCreditCardLogs(): Observable<CreditCard>{
    return this.handler.handleGET<CreditCard>(this.apiAllCards);
  }
  getUserCreditCardLogs(id: any): Observable<CreditCard>{
    return this.handler.handleGET<CreditCard>(this.apiUserCards + id);
  }
  getTodayCreditCardLogs(id: number): Observable<CreditCard>{
    return this.handler.handleGET<CreditCard>(this.apiTodayCards + id)
  }
  getCreditCardLogDetails(id: number): Observable<CreditCard>{
    return this.handler.handleGET<CreditCard>(this.apiCardDetails + id)
  }
  addCreditCardLog(creditCardInfo: CreditCard): Observable<CreditCard>{
    return this.handler.handlePOST<CreditCard>(this.apiAllCards, creditCardInfo);
  }
  updateCreditCardDetails(id,data): Observable<CreditCard>{
    return this.handler.handlePUT<CreditCard>(this.apiCardDetails + id, data)
  }
  getFuelPumps(id: number): Observable<any>{
    return this.handler.handleGET<any>(this.apiFuelPumps + id)
  }
  emailCardReport(card_report: any): Observable<any>{
    return this.handler.handlePOST<any>(this.apiCardReport, card_report);
  }
  deleteCard(logData): Observable<any>{
    return this.handler.handlePOST<any>(this.apiDelCard, logData)
  }
  searchByDate(cardDate:string): Observable<any>{
    return this.handler.handleGET<any>(this.apiPastCards + cardDate)
  }
}

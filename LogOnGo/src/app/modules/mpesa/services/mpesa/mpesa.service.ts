import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogMpesa } from 'src/app/classes/log-mpesa/log-mpesa';
import { RequestHandlerService } from 'src/app/helpers/requests/request-handler.service';

const apiURL = 'https://logongo-api-production.up.railway.app/api/';
// const apiURL = 'http://127.0.0.1:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class MpesaService {
  apiAllMpesa = apiURL + 'logs/mpesa/all/';
  apiTodayMpesa = apiURL + 'logs/mpesa/today/';
  apiUserMpesa = apiURL + 'logs/mpesa/user/';
  apiMpesaDetails = apiURL + 'log/mpesa/details/';
  apiPastMpesa = apiURL + 'logs/mpesa/past/';
  apiMpesaReport = apiURL + 'log/mpesa/email/report/';
  apiDelMpesa = apiURL + 'log/mpesa/delete/request/';

  constructor(
    private handler:RequestHandlerService,
    ) { }

  getAllMpesaLogs(): Observable<any>{
    return this.handler.handleGET<any>(this.apiAllMpesa);
  }
  getUserMpesaLogs(id: any): Observable<LogMpesa>{
    return this.handler.handleGET<LogMpesa>(this.apiUserMpesa + id);
  }
  getTodayMpesaLogs(id: number): Observable<LogMpesa>{
    return this.handler.handleGET<LogMpesa>(this.apiTodayMpesa + id);
  }
  getMpesaLogDetails(id: number): Observable<LogMpesa>{
    return this.handler.handleGET<LogMpesa>(this.apiMpesaDetails + id)
  }
  addMpesaLog(mpesa_info: LogMpesa): Observable<LogMpesa>{
    return this.handler.handlePOST<LogMpesa>(this.apiAllMpesa, mpesa_info);
  }
  updateMpesaDetails(id,data): Observable<LogMpesa>{
    return this.handler.handlePUT<LogMpesa>(this.apiMpesaDetails + id, data)
  }
  emailMpesaReport(mpesaReport: any): Observable<any>{
    return this.handler.handlePOST<any>(this.apiMpesaReport, mpesaReport);
  }
  deleteMpesa(logData): Observable<any>{
    return this.handler.handlePOST<any>(this.apiDelMpesa, logData)
  }
  searchByDate(logDate:string): Observable<LogMpesa>{
    return this.handler.handleGET<any>(this.apiPastMpesa + logDate)
  }
}

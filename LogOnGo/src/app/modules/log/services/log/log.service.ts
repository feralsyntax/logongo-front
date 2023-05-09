import { Injectable, Input } from '@angular/core';
// import { NgControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Log } from 'src/app/classes/log/log';
import { RequestHandlerService } from 'src/app/helpers/requests/request-handler.service';

const apiURL = 'https://logongo-api-production.up.railway.app/api/';
// const apiURL = 'http://127.0.0.1:8000/api/';

@Injectable({
  providedIn: 'root'
})

export class LogService {
  apiAllLogs = apiURL + 'logs/all/';
  apiLogsToday = apiURL + 'logs/today/';
  apiUserLogs = apiURL + 'logs/user/';
  apiFuelLogs = apiURL + 'logs/today/fuel/';
  apiLogsYesterday = apiURL + 'logs/yesterday/fuel/';
  apiLogDetails = apiURL + 'log/details/';
  apiPastLogs = apiURL + 'logs/past/';
  apiLogReport = apiURL + 'log/email/report/';
  apiDelLog = apiURL + 'log/delete/request/';
  
  constructor(
    private handler:RequestHandlerService,
    ) { }

  getAllLogs(): Observable<any>{
    return this.handler.handleGET<any>(this.apiAllLogs);
  }
  getUserLogs(id: any): Observable<any>{
    return this.handler.handleGET<any>(this.apiUserLogs + id);
  }
  getFuelLogs(fuelId:number): Observable<Log>{
    return this.handler.handleGET<any>(this.apiFuelLogs + fuelId);
  }
  getYesterdayLogs(fuelId:number): Observable<Log>{
    return this.handler.handleGET<any>(this.apiLogsYesterday + fuelId);
  }
  getLogDetails(id: number): Observable<Log>{
    return this.handler.handleGET<any>(this.apiLogDetails + id);
  }
  updateLogInfo(id, data): Observable<Log>{
    return this.handler.handlePUT<any>(this.apiLogDetails + id, data);
  }
  addLog(log_info: any): Observable<any>{
    return this.handler.handlePOST<any>(this.apiLogsToday, log_info);
  }
  searchLog(): Observable<Log>{
    return this.handler.handleGET<any>(this.apiAllLogs)
  }
  searchByDate(logDate:string): Observable<Log>{
    return this.handler.handleGET<any>(this.apiPastLogs + logDate)
  }
  emailLogReport(logReport: any): Observable<any>{
    return this.handler.handlePOST<any>(this.apiLogReport, logReport);
  }
  deleteLog(logData): Observable<any>{
    return this.handler.handlePOST<any>(this.apiDelLog, logData)
  }
}

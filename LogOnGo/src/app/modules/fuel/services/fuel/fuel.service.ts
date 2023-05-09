import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fuel } from 'src/app/classes/fuel/fuel';
import { RequestHandlerService } from 'src/app/helpers/requests/request-handler.service';

const apiURL = 'https://logongo-api-production.up.railway.app/api/';
// const apiURL = 'http://127.0.0.1:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class FuelService {
  apiAllFuels = apiURL + 'fuels/all/';
  apiFuelInfo = apiURL + 'fuel/info/';
  apiPetrolInfo = apiURL + 'petrol/info/';
  apiDieselInfo = apiURL + 'diesel/info/';
  apiGasInfo = apiURL + 'gas/info/';
  apiFuelSummary = apiURL + 'fuel/summary/today/';
  apiAllFuelReceived = apiURL + 'fuel/received/today/all/';
  apiFuelReceivedInfo = apiURL + 'fuel/received/today/info/';
  apiTotalFuelReceived = apiURL + 'fuel/received/today/total/'

  constructor(
    private handler:RequestHandlerService,
    ) { }

  getFuels(): Observable<Fuel>{
    return this.handler.handleGET<Fuel>(this.apiAllFuels)
  }
  addFuel(fuel_info: any): Observable<Fuel>{
    return this.handler.handlePOST<Fuel>(this.apiAllFuels, fuel_info);
  }
  addFuelReceived(data): Observable<Fuel>{
    return this.handler.handlePOST<Fuel>(this.apiAllFuelReceived, data);
  }
  getFuelInfo(id: number): Observable<Fuel>{
    return this.handler.handleGET<Fuel>(this.apiFuelInfo + id)
  }
  getPetrolInfo(): Observable<Fuel>{
    return this.handler.handleGET<Fuel>(this.apiPetrolInfo)
  }
  getDieselInfo(): Observable<Fuel>{
    return this.handler.handleGET<Fuel>(this.apiDieselInfo)
  }
  getGasInfo(): Observable<Fuel>{
    return this.handler.handleGET<Fuel>(this.apiGasInfo)
  }
  getFuelSummary(id:number): Observable<any>{
    return this.handler.handleGET<any>(this.apiFuelSummary + id)
  }
  getAllFuelReceived(): Observable<any>{
    return this.handler.handleGET<any>(this.apiAllFuelReceived)
  }
  getFuelReceivedInfo(id: number): Observable<any>{
    return this.handler.handleGET<any>(this.apiFuelReceivedInfo + id)
  }
  getTotalFuelReceived(id: number): Observable<any>{
    return this.handler.handleGET<any>(this.apiTotalFuelReceived + id)
  }
  updateFuelInfo(id, data): Observable<any>{
    return this.handler.handlePUT<any>(this.apiFuelInfo + id, data)
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Announcement } from 'src/app/classes/announcement/announcement';
import { CreditCard } from 'src/app/classes/card/credit-card';
import { Contact } from 'src/app/classes/contact/contact';
import { FuelReceived } from 'src/app/classes/fuel-received/fuel-received';
import { Fuel } from 'src/app/classes/fuel/fuel';
import { Incident } from 'src/app/classes/incident/incident';
import { LogMpesa } from 'src/app/classes/log-mpesa/log-mpesa';
import { Log } from 'src/app/classes/log/log';
import { User } from 'src/app/classes/user/user';
import { RequestHandlerService } from 'src/app/helpers/requests/request-handler.service';

// const apiURL = 'http://127.0.0.1:8000/api/'
const apiURL = 'https://logongo-api-production.up.railway.app/api/'

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  logSummary = apiURL + 'logs/summary/';
  mpesaSummary = apiURL + 'mpesa/summary/';
  cardSummary = apiURL + 'card/summary/';
  allAdmins = apiURL + 'all/admins/';
  announce = apiURL + 'announcements/all/';
  editAnnounce = apiURL + 'announcements/update/';
  delContact = apiURL + 'contact/details/';
  allContacts = apiURL + 'contact/admin/';
  incidents = apiURL + 'incident/report/';
  incidentDetails = apiURL + 'incident/details/';
  fuelDetails = apiURL + 'fuel/info/';
  cardDetails = apiURL + 'log/card/details/';
  fuelRcvdDetails = apiURL + 'fuel/received/details/';
  mpesaDetails = apiURL + 'log/mpesa/details/';
  logDetails = apiURL + 'log/details/';
  allFuels = apiURL + 'fuels/all/';
  allMpesa = apiURL + 'logs/mpesa/all/';
  allLogs = apiURL + 'logs/all/';
  allCards = apiURL + 'logs/card/all/';
  logsTd = apiURL + 'logs/today/';
  allReceived = apiURL + 'fuel/received/today/all/';
  allUsers = apiURL + 'all-users/';
  userDetails = apiURL + 'user/profile/';
  updateUser = apiURL + 'user/update/';
  addAnnounce = apiURL + 'announcements/add/';
  delFuel = apiURL + 'fuel/remove/';
  delLog = apiURL + 'logs/remove/';
  delMpesa = apiURL + 'logs/mpesa/remove/';
  delCard = apiURL + 'logs/card/remove/';

  constructor(
    private handler:RequestHandlerService,
  ) { }

  

  getAllUsers(): Observable<Fuel>{
    return this.handler.handleGET<Fuel>(this.allUsers)
  }
  getUserDetails(): Observable<Fuel>{
    return this.handler.handleGET<Fuel>(this.userDetails)
  }
  editUserDetails(id:number,data: User): Observable<Fuel>{
    return this.handler.handlePUT<Fuel>(this.updateUser + id, data)
  }
  getAllFuels(): Observable<Fuel>{
    return this.handler.handleGET<Fuel>(this.allFuels)
  }
  getAllAnnouncements(): Observable<Announcement>{
    return this.handler.handleGET<Announcement>(this.announce)
  }
  addFuel(data: Fuel): Observable<Fuel>{
    return this.handler.handlePOST<Fuel>(this.allFuels, data)
  }
  addFuelReceived(data: FuelReceived): Observable<FuelReceived>{
    return this.handler.handlePOST<FuelReceived>(this.allReceived, data)
  }
  getAllFuelsReceived(): Observable<FuelReceived>{
    return this.handler.handleGET<FuelReceived>(this.allReceived)
  }
  getAllMpesa(): Observable<LogMpesa>{
    return this.handler.handleGET<LogMpesa>(this.allMpesa)
  }
  getMpesaDetails(id:number): Observable<LogMpesa>{
    return this.handler.handleGET<LogMpesa>(this.mpesaDetails + id)
  }
  getLogDetails(id:number): Observable<Log>{
    return this.handler.handleGET<Log>(this.logDetails + id)
  }
  getCardDetails(id:number): Observable<CreditCard>{
    return this.handler.handleGET<CreditCard>(this.cardDetails + id)
  }
  getAllLogs(): Observable<Log>{
    return this.handler.handleGET<Log>(this.allLogs)
  }
  getAllCards(): Observable<CreditCard>{
    return this.handler.handleGET<CreditCard>(this.allCards)
  }
  updateMpesa(id: number, data: LogMpesa): Observable<LogMpesa>{
    return this.handler.handlePUT<LogMpesa>(this.mpesaDetails + id, data)
  }
  addMpesa(data: LogMpesa): Observable<LogMpesa>{
    return this.handler.handlePOST<LogMpesa>(this.allMpesa, data)
  }
  addLog(data: Log): Observable<Log>{
    return this.handler.handlePOST<Log>(this.logsTd, data)
  }
  addCard(data: CreditCard): Observable<CreditCard>{
    return this.handler.handlePOST<CreditCard>(this.allCards, data)
  }
  updateLog(id: number, data: Log): Observable<Log>{
    return this.handler.handlePUT<Log>(this.logDetails + id, data)
  }
  updateCard(id: number, data: CreditCard): Observable<CreditCard>{
    return this.handler.handlePUT<Log>(this.cardDetails + id, data)
  }
  getLogSummary(): Observable<Log>{
    return this.handler.handleGET<Log>(this.logSummary)
  }
  getCardSummary(): Observable<CreditCard>{
    return this.handler.handleGET<CreditCard>(this.cardSummary)
  }
  geMpesaSummary(): Observable<LogMpesa>{
    return this.handler.handleGET<LogMpesa>(this.mpesaSummary)
  }
  getAllAdmins(): Observable<User>{
    return this.handler.handleGET<User>(this.allAdmins)
  }
  addAnnouncement(data: Announcement): Observable<Announcement>{
    return this.handler.handlePOST<Announcement>(this.addAnnounce, data)
  }
  editAnnouncement(id: number,data: Announcement): Observable<Announcement>{
    return this.handler.handlePUT<Announcement>(this.editAnnounce + id, data)
  }
  getAnnouncementDetails(id: number): Observable<Announcement>{
    return this.handler.handleGET<Announcement>(this.editAnnounce + id)
  }
  deleteAnnouncement(id: number): Observable<Announcement>{
    return this.handler.handleDEL<Announcement>(this.editAnnounce + id)
  }
  getAllContacts(): Observable<Contact>{
    return this.handler.handleGET<Contact>(this.allContacts)
  }
  getContactDetails(id: number): Observable<Contact>{
    return this.handler.handleGET<Contact>(this.delContact + id)
  }
  deleteContact(id: number): Observable<Contact>{
    return this.handler.handleDEL<Contact>(this.delContact + id)
  }
  getIncidentReports(): Observable<Incident>{
    return this.handler.handleGET<Incident>(this.incidents)
  }
  getIncidentDetails(id: number): Observable<Incident>{
    return this.handler.handleGET<Incident>(this.incidentDetails + id)
  }
  deleteIncident(id: number): Observable<Incident>{
    return this.handler.handleDEL<Incident>(this.incidentDetails + id)
  }
  deleteFuel(id: number): Observable<Fuel>{
    return this.handler.handleDEL<Fuel>(this.delFuel + id)
  }
  deleteCard(id: number): Observable<CreditCard>{
    return this.handler.handleDEL<CreditCard>(this.delCard + id)
  }
  getFuelReceivedDetails(id: number): Observable<FuelReceived>{
    return this.handler.handleGET<FuelReceived>(this.fuelRcvdDetails + id)
  }
  getFuelDetails(id: number): Observable<Fuel>{
    return this.handler.handleGET<Fuel>(this.fuelDetails + id)
  }
  editFuelReceived(id: number,data: FuelReceived): Observable<FuelReceived>{
    return this.handler.handlePUT<FuelReceived>(this.fuelDetails + id, data)
  }
  editFuel(id: number,data: Fuel): Observable<Fuel>{
    return this.handler.handlePUT<Fuel>(this.fuelDetails + id, data)
  }
  deleteFuelReceived(id: number): Observable<FuelReceived>{
    return this.handler.handleDEL<FuelReceived>(this.fuelDetails + id)
  }
  deleteMpesa(id: number): Observable<LogMpesa>{
    return this.handler.handleDEL<LogMpesa>(this.delMpesa + id)
  }
  deleteLog(id: number): Observable<Log>{
    return this.handler.handleDEL<Log>(this.delLog + id)
  }
}

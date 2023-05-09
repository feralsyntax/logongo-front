import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestHandlerService } from 'src/app/helpers/requests/request-handler.service';

// const apiURL = 'http://127.0.0.1:8000/api/';
const apiURL = 'https://logongo-api-production.up.railway.app/api/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  announceURL = apiURL + 'announcements/latest/';
  announceAll = apiURL + 'announcements/all/';
  contactURL = apiURL + 'contact/admin/';
  incidentURL = apiURL + 'incident/report/';

  constructor(
    private handler:RequestHandlerService,
  ) { }

  getLatestAnnouncements(): Observable<any>{
    return this.handler.handleGET<any>(this.announceURL);
  }
  getAllAnnouncements(): Observable<any>{
    return this.handler.handleGET<any>(this.announceAll);
  }
  contactAdmin(message): Observable<any>{
    return this.handler.handlePOST<any>(this.contactURL,message);
  }
  reportIncident(incident): Observable<any>{
    return this.handler.handlePOST<any>(this.incidentURL,incident);
  }
}

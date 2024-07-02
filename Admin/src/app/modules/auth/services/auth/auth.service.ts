import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/classes/user/user';
import { map } from 'rxjs/operators';
import { RequestHandlerService } from 'src/app/helpers/requests/request-handler.service';

// const authAPI = 'http://127.0.0.1:8000/api/auth/';
const authAPI = 'https://logongo-api-production.up.railway.app/api/auth/';
// const apiURL = 'http://127.0.0.1:8000/api/';
const apiURL = 'https://logongo-api-production.up.railway.app/api/';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  apiLogin = authAPI + 'login';
  apiLogout = authAPI + 'logout/';
  apiUserProfile = apiURL + 'user/profile/';
  apiChangePass = apiURL + 'password/change/';
  apiPassResetReq = apiURL + 'password/reset/request/';
  apiPassResetConfirmed = apiURL + 'password/reset/confirmed/';
  apiReg = authAPI + 'register';

  constructor(
    private http: HttpClient,
    private handler: RequestHandlerService
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(userData: User) {
    return this.handler.handlePOST(this.apiLogin, userData).pipe(
      map((user) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      })
    );
  }
  register(userData: User): Observable<User> {
    return this.handler.handlePOST<User>(this.apiReg, userData);
  }
  logout() {
    // return this.http.get<any>(this.apiLogout);
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
  changePassword(passData, id: number): Observable<any> {
    return this.handler.handlePUT<any>(this.apiChangePass + id, passData);
  }
  requestResetPassword(userData): Observable<any> {
    return this.handler.handlePOST<any>(this.apiPassResetReq, userData);
  }
  resetPassword(passData, id: number): Observable<any> {
    return this.handler.handlePUT<any>(
      this.apiPassResetConfirmed + id,
      passData
    );
  }
}

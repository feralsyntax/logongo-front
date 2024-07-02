import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/classes/user/user';
import { map } from 'rxjs/operators';
import { jwtDecode } from 'jwt-decode';
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
  apiReg = authAPI + 'register';
  apiLogout = authAPI + 'logout/';
  apiUserProfile = apiURL + 'user/profile/';
  apiChangePass = apiURL + 'password/change/';
  apiPassResetReq = apiURL + 'password/reset/request/';
  apiPassResetConfirmed = apiURL + 'password/reset/confirmed/';

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

  login(userData) {
    return this.handler.handlePOST(this.apiLogin, userData).pipe(
      map((user) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      })
    );
  }
  register(userData) {
    return this.handler.handlePOST(this.apiReg, userData);
  }
  refreshToken() {
    const refreshToken = this.currentUserValue.refreshToken;
    return this.http
      .post<any>(apiURL + 'token/refresh/', { refresh: refreshToken })
      .pipe(
        map((response) => {
          let currentUser: User;
          if (response.access) {
            currentUser = jwtDecode(response.access);
            currentUser.token = response.access;
            currentUser.refreshToken = response.refresh;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            console.log(currentUser);
            this.currentUserSubject.next(currentUser);
          }
          return currentUser;
        })
      );
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
  getProfileDetails(): Observable<any> {
    return this.handler.handleGET<any>(this.apiUserProfile);
  }
}

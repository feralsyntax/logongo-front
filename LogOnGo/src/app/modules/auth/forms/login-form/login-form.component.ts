import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { first, Subject } from 'rxjs';
import { User } from 'src/app/classes/user/user';
import { MessageService } from 'src/app/modules/errors/services/message/message.service';
import { AuthService } from '../../services/auth/auth.service';
import { MyErrorStateMatcher } from '../../services/matcher/matcher.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  company: string = 'Pebo Kenya Ltd'
  authenticated: boolean = false;
  matcher = new MyErrorStateMatcher();
  private unsubscribe$ = new Subject<void>();
  err: any;
  emailExample = 'your_name@provider.com';

  constructor(
    private authService:AuthService,
    private router:Router,
    private messageS:MessageService,
  ) { }

  ngOnInit(): void {
    if(this.authService.currentUserValue){
      this.authenticated = false; 
      this.router.navigate(['/auth/welcome/' + this.authService.currentUserValue.username])
    } else {
      this.authenticated = false; 
      this.authService.logout();
      this.router.navigate(['/auth'])
    }
  }
  isValid(event: boolean): void {
    console.log(event);
  }
  logIn(userData: User): void {
    Notiflix.Loading.hourglass('Processing... please wait.');
    this.authService.login(userData).pipe(first()).subscribe(
        (data: User) => {
          Notiflix.Loading.remove();
                  Notiflix.Notify.success('Login successful! Welcome.');
                  this.router.navigate(['/auth/welcome/' + this.authService.currentUserValue.username]);
                  location.reload();
                  this.authenticated = true;
                });
    }
}
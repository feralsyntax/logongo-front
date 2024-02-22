import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { first, Subject, takeUntil } from 'rxjs';
import { User } from 'src/app/classes/user/user';
import { AuthService } from '../../services/auth/auth.service';
import { MyErrorStateMatcher } from '../../services/matcher/matcher.service';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {
  company: string = 'Pebo Kenya Ltd'
  formValid: boolean = false;
  hide = true;
  noMatch: boolean;
  matched: boolean;
  values = '';
  value = '';
  noPass2: boolean;
  matcher = new MyErrorStateMatcher();
  private unsubscribe$ = new Subject<void>();
  emailExample = 'your_name@provider.com';

  constructor(
    private router:Router,
    private authService:AuthService,
    ) { }

  ngOnInit(): void {
    this.confirmPass();
  }

  isValid(event: boolean): void {
    console.log(event);
  }
  onKeyOne(event: any){
    this.value = event.target.value; 
  }
  onKey(event: any){
    this.values = event.target.value; 
  }
  confirmPass(){
    let pass1 = document.getElementById("pass1").textContent;  
    var pass2 = document.getElementById("pass2").textContent;  
    if (pass1 == pass2) {
      this.noMatch = false;
    } else if (pass1 != pass2){
      this.noMatch = true;
    } 
  }
  signUp(userData: User): void {
    Notiflix.Loading.hourglass('Processing, please wait...');
    this.authService.register(userData).pipe(first()).subscribe({
      next: (res) => {
        Notiflix.Notify.success('Registration successful!');
        this.router.navigate(['/auth']);
        Notiflix.Loading.remove();
      }
    });  
  }

  
}

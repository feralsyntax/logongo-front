import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { Subject, first } from 'rxjs';
import { User } from 'src/app/classes/user/user';
import { AuthService } from '../../auth/services/auth/auth.service';
import { MyErrorStateMatcher } from '../../auth/services/matcher/matcher.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.less']
})
export class AddUserComponent implements OnInit {
  company: string = 'Pebo Kenya Ltd'
  formValid: boolean = false;
  hide = true;
  noMatch: boolean;
  matched: boolean;
  values = '';
  value = '';
  noPass2: boolean;
  @Input() reset!: () => void;
  @Input() reload!: () => void;
  currentUser!: User;
  matcher = new MyErrorStateMatcher();
  private unsubscribe$ = new Subject<void>();
  
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
        this.router.navigate(['/login']);
        Notiflix.Loading.remove();
      }
    });  
  }

  
}

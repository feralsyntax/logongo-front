import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { Subject, takeUntil } from 'rxjs';
import { Fuel } from 'src/app/classes/fuel/fuel';
import { User } from 'src/app/classes/user/user';
import { AdminService } from 'src/app/services/admin/admin.service';
import { AuthService } from '../../auth/services/auth/auth.service';

@Component({
  selector: 'app-all-credit-card-logs',
  templateUrl: './all-credit-card-logs.component.html',
  styleUrls: ['./all-credit-card-logs.component.css']
})
export class AllCreditCardLogsComponent implements OnInit, OnDestroy {
  @Input()
  reload!: () => void;
  myModel = 'Credit Card Log';
  @Input() myList: any;
  @Input() id: any;
  @Input()
  admins!: User;
  @Input()
  copy!: (text: number) => void;
  showData: boolean = false;
  hideContent: boolean = false;
  showEdit: boolean = false;
  @Input()
  fuels!: Fuel;
  private unsubscribe$ = new Subject<void>();


  constructor(
    private service:AdminService,
    private auth:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    if(!this.auth.currentUserValue){
      this.auth.logout();
      this.router.navigate[('/auth')]
    }else if(!this.auth.currentUserValue.is_staff || !this.auth.currentUserValue.is_superuser){
      this.auth.logout();
      this.router.navigate[('/auth')];
      Notiflix.Report.failure(
        'Not Permitted!',
        "Your log in was successful, but you don't have the permissions to access this page.",
        'Too Bad',
      )
    }
    this.allRecords();
  }
  allRecords(){
    Notiflix.Loading.dots('Loading...');
    this.service.getAllCards().pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (res) => {
        Notiflix.Loading.remove();
        this.myList = res;
      }
    })
  }
  openForm = (): void => {
    this.showData = true;
    this.hideContent = true;
    this.showEdit = false;
  }
  redirect = (): void => {
    setTimeout(() => {
      this.openForm();
    }, 250)
  }
  reset = (): void => {
    const form = (<HTMLFormElement>document.getElementById('addCardForm'));
    setTimeout(() => {
      form.reset();
    }, 250)
  }
  close(){
    this.showData = false;
    this.hideContent = false;
    this.showEdit = false;
  }
  edit(){
    this.showEdit = true;
    this.hideContent = true;
  }

  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

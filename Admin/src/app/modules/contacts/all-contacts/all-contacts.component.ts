import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { Subject, takeUntil } from 'rxjs';
import { Contact } from 'src/app/classes/contact/contact';
import { User } from 'src/app/classes/user/user';
import { AdminService } from 'src/app/services/admin/admin.service';
import { AuthService } from '../../auth/services/auth/auth.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent implements OnInit, OnDestroy {
  contacts: Contact = new Contact;
  showEdit: boolean = false;
  showContacts: boolean = false;
  hideContent: boolean = false;
  admins: User = new User;
  selected: any;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private service:AdminService,private auth:AuthService,
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
    this.allContacts();
    this.allAdmins();
  }
  allAdmins(){
    this.service.getAllAdmins().pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (res) => {
        this.admins = res;
      }
    })
  }
  allContacts(){
    Notiflix.Loading.dots('Loading...');
    this.service.getAllContacts().pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (res) => {
        Notiflix.Loading.remove();
        this.contacts = res;
      }
    })
  }
  openContact = (): void => {
    this.showContacts = true;
    this.hideContent = true;
  }
  close(){
    this.hideContent = false;
    this.showEdit = false;
  }
  reload = (): void => {
    setTimeout(() => {
      location.reload();
    }, 250)
  }
  reset = (): void => {
    const form = (<HTMLFormElement>document.getElementById('announceForm'))
    setTimeout(() => {
      form.reset();
    }, 500)
  }
  copy(text: any){
    localStorage.setItem('mySavedId',text);
    this.selected = localStorage.getItem('mySavedId')
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


import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { AuthService } from './modules/auth/services/auth/auth.service';
import { MessageService } from './modules/errors/services/message/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LogOnGo';

  constructor(
    private meta:Meta,
    private messageS:MessageService,
    // private detector:ChangeDetectorRef,
    private auth:AuthService
    ) { }

  ngOnInit(): void {
    this.meta.updateTag({name: 'title', content: 'AppRoot'}) 
    this.meta.updateTag({name: 'description', content: 'Petrol Station Management'}) 
    this.meta.updateTag({name: 'image', content: ''}) 
    this.meta.updateTag({name: 'site', content: 'LogOnGo'}) 
    // this.detector.detectChanges();
    let err: string;

    if(this.auth.currentUserValue){
      console.warn(this.auth.currentUserValue)
    }
  }
}

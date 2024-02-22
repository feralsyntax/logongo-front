import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentUser: any;
  authenticated: boolean = false;
  year = new Date().getFullYear();

  constructor(
    private auth:AuthService
  ) { }

  ngOnInit(): void {
    this.currentUser = this.auth.currentUserValue;
    if(this.currentUser){
      this.authenticated = true;
    } else {
      this.authenticated = false;
    }
  }

}

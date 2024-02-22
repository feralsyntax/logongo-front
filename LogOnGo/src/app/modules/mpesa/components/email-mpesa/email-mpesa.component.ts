import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';
import { MyErrorStateMatcher } from 'src/app/modules/auth/services/matcher/matcher.service';
import { MpesaService } from '../../services/mpesa/mpesa.service';

@Component({
  selector: 'app-email-mpesa',
  templateUrl: './email-mpesa.component.html',
  styleUrls: ['./email-mpesa.component.css']
})
export class EmailMpesaComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  mpesa_log_details: any;
  user: any;
  mpesa_cumulative: any;
  mpesaDetails: any;
  currentUser = this.authService.currentUserValue;
  emailExample = 'your_name@provider.com';
  
  constructor(
    private mpesa:MpesaService,
    private route:ActivatedRoute,
    private authService:AuthService,
    private router:Router,
    ) { 
    
  }

  emailMpesaReport(reportData) {
    Notiflix.Loading.hourglass('Sending... please wait.')
    // Notiflix.Block.arrows('Please wait')
    this.mpesa.emailMpesaReport(reportData).subscribe((result) => {
      console.warn('result', result);
      Notiflix.Loading.remove()
      Notiflix.Report.success(
        "Sent!",
        "The requested mpesa log report has been delivered to your email. Remember to check it out!",
        "Okay"
        )
      history.back();
    });
  }

  ngOnInit(): void {
    if(this.authService.currentUserValue){
      this.currentUser = this.authService.currentUserValue
    } else {
      this.currentUser = '';
      this.authService.logout();
      this.router.navigate(['/auth'])
    }
    this.route.params.subscribe(params => this.getMpesaLogDetails(params['id']))
  }

  getMpesaLogDetails(id:number){
    Notiflix.Loading.dots('Loading...');
    this.mpesa.getMpesaLogDetails(id).subscribe(
      (data) => {
        Notiflix.Loading.remove();
        this.mpesaDetails = data
        console.warn("mpesa log details",data)
      }
    );
  }

}


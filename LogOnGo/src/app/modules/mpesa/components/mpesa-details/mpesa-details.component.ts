import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';
import { FuelService } from 'src/app/modules/fuel/services/fuel/fuel.service';
import { MpesaService } from '../../services/mpesa/mpesa.service';

@Component({
  selector: 'app-mpesa-details',
  templateUrl: './mpesa-details.component.html',
  styleUrls: ['./mpesa-details.component.css']
})
export class MpesaDetailsComponent implements OnInit {
  fuelReceived: any;
  fuelTotal: any;
  fuelType: any;
  fuelId: any;
  mpesaDetails: any; 
  delConfirmed: boolean = false;
  id: number;
  currentUser = this.authService.currentUserValue;
  closed: boolean = false;
  updateConfirmed: boolean = false;
  err: any;
  errDate = '';
  errTrans = '';
  errName = '';
  errPhone = '';
  errAmount = '';
  errBank = '';
  errMsg = '';
  statusText = '';
  error: any;
  message = '';
  noneRcvd: boolean;
  noTotal: boolean;


  constructor(
    private mpesa:MpesaService,
    private route:ActivatedRoute,
    private authService:AuthService,
    private router:Router,
    private fuel:FuelService,
  ) { }

  ngOnInit(): void {
    if(this.authService.currentUserValue){
      this.currentUser = this.authService.currentUserValue
    } else {
      this.currentUser = '';
      this.authService.logout();
      this.router.navigate(['/auth'])
    }
    this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe(params => this.getMpesaLogDetails(params['id']))
  }
  getMpesaLogDetails(id:number){
    Notiflix.Loading.dots('Loading...');
    this.mpesa.getMpesaLogDetails(id).subscribe({
      next: (data) => {
        Notiflix.Loading.dots('Loading...');
        this.mpesaDetails = data
        this.fuelId = this.mpesaDetails.fuel 
        this.fuelType = this.mpesaDetails.fuel_type
        this.getFuelReceived();
        this.getTotalFuelReceived();
      }
    });
  }
  updateMpesaDetails(mpesaData){
    this.mpesa.updateMpesaDetails(this.id,mpesaData).subscribe({
        next: (res) => {
          console.log(res);
          Notiflix.Notify.success('updated!');
          // this.message = res.message ? res.message : 'This tutorial was updated successfully!';
          this.closed = true;
          this.errDate = '';
          this.errTrans = ''; 
          this.errName = '';
          this.errPhone = '';
          this.errAmount = '';
          this.errBank = '';

        },
        error: (e) => {
          console.error(e)
          Notiflix.Notify.failure('Update failed!')
          this.closed = false;
          this.errMsg = e.error.detail;
          this.statusText = e.statusText;
          this.errDate = e.error.date;
          this.errTrans = e.error.transaction_number; 
          this.errName = e.error.customer_name;
          this.errPhone = e.error.customer_phone_number;
          this.errAmount = e.error.amount;
          this.errBank = e.error.amount_transferred_to_bank;
          if(this.errMsg && this.statusText){
            Notiflix.Report.failure(
              this.statusText,
              this.errMsg,
              "Okay",
            )
          } else if(this.statusText){
            Notiflix.Report.failure(
              this.statusText,
              'Please fix the highlighted errors and try again.',
              "Okay",
            )
          }
        } 
      });
  }
  reportWarn(){
    Notiflix.Confirm.show(
      'Confirm update',
      "Are you sure you want to edit this log?",
      "I'm sure",
      "Take me back",
      () => {
        Notiflix.Report.info(
          "Remember",
          "We keep records of all updates.",
          "Okay",
        )
        this.updateConfirmed = true;
        this.closed = false;
      },
      () => {
        Notiflix.Report.success(
          "Aborted!",
          "You have canceled the edit request. In case you did so by mistake, please make a new request.",
          'Great',
        )
        this.updateConfirmed = false;
      }
    )
  }
  toggleUpdateForm(){
    this.closed = true;
  }
  delWarn(){
    Notiflix.Confirm.show(
      'Confirm delete',
      "Are you sure you want to delete this log?",
      "I'm sure",
      "Take me back",
      () => {
        Notiflix.Report.warning(
          "Please note",
          "We will send this request to the administration.",
          "Okay",
        )
        this.delConfirmed = true;
        this.router.navigate(['/mpesa/delete/request/' + this.id])
      },
      () => {
        Notiflix.Report.success(
          "Aborted!",
          "You have canceled the delete request. In case you did so by mistake, please make a new request.",
          'Great',
        )
        this.delConfirmed = false;
      }
    )
  }
  getFuelReceived(){
    this.fuel.getFuelReceivedInfo(this.fuelId).subscribe(
      data => {
        this.fuelReceived = data;
        if(data == 204 || this.fuelReceived.litres === null || data.length == undefined){
          this.noneRcvd = true;
        }else{
          this.noneRcvd = false;
        }
      }
    )
  }
  getTotalFuelReceived(){
    this.fuel.getTotalFuelReceived(this.fuelId).subscribe(
      data => {
        this.fuelTotal = data;
        if(data == 204 || this.fuelTotal.total_today === null || data.length == undefined){
          this.noTotal = true;
        }else{
          this.noTotal = false;
        }
      }
    )
  }
  printMpesa(){
    window.print();
  }

}


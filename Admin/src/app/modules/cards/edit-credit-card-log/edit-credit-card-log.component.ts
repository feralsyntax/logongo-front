import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { Subject, takeUntil } from 'rxjs';
import { CreditCard } from 'src/app/classes/card/credit-card';
import { Fuel } from 'src/app/classes/fuel/fuel';
import { User } from 'src/app/classes/user/user';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-edit-credit-card-log',
  templateUrl: './edit-credit-card-log.component.html',
  styleUrls: ['./edit-credit-card-log.component.css']
})
export class EditCreditCardLogComponent implements OnInit, OnDestroy {
  @Input() id: any;
  @Input()
  admins!: User;
  @Input()
  reload!: () => void;
  @Input()
  openForm!: () => void;
  @Input()
  redirect!: () => void;
  details!: CreditCard;
  delConfirmed: boolean = false;
  currentUser!: User;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private service:AdminService,
    private auth:AuthService,
  ) { }

  ngOnInit(): void {
    if(this.auth.currentUserValue){
      this.currentUser = this.auth.currentUserValue;
    } else {
      !this.currentUser;
    }
    this.itemDetails();
  }
  editItem(data: CreditCard){
    this.service.updateCard(this.id,data).pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (res) => {
        Notiflix.Notify.success('Updated!');
      }
    })
  }
  itemDetails(){
    Notiflix.Loading.dots('Loading...');
    this.service.getCardDetails(this.id).pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (res) => {
        Notiflix.Loading.remove();
        this.details = res;
      }
    })
  }
  delete(){
    Notiflix.Loading.arrows('Deleting... please wait.')
    this.service.deleteCard(this.id).pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (res) => {
        Notiflix.Report.success(
          "Deleted!",
          'The credit card log was deleted successfully.',
          'Great',
        )
        Notiflix.Loading.remove();
      }
    })
  }
  delWarn(){
    Notiflix.Confirm.show(
      'Confirm update',
      "Are you sure you want to delete this credit card log? The action cannot be undone",
      "I'm sure",
      "Take me back",
      () => {
        this.delConfirmed = true;
        this.delete();
        location.reload();
      },
      () => {
        Notiflix.Report.success(
          "Aborted!",
          "You have cancelled the delete request. In case you did so by mistake, please make a new request.",
          'Great',
        )
        this.delConfirmed = false;
      }
    )
  }
  
  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}


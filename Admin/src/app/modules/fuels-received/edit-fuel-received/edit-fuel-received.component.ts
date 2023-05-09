import { Component, Input, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { Subject, takeUntil } from 'rxjs';
import { FuelReceived } from 'src/app/classes/fuel-received/fuel-received';
import { Fuel } from 'src/app/classes/fuel/fuel';
import { User } from 'src/app/classes/user/user';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-edit-fuel-received',
  templateUrl: './edit-fuel-received.component.html',
  styleUrls: ['./edit-fuel-received.component.css']
})
export class EditFuelReceivedComponent implements OnInit {
  @Input() id: any;
  @Input() fuels: any;
  @Input()
  admins!: User;
  @Input()
  reload!: () => void;
  @Input()
  openForm!: () => void;
  @Input()
  redirect!: () => void;
  details: any;
  delConfirmed: boolean = false;
  selected: any;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private service:AdminService,
  ) { }

  ngOnInit(): void {
    this.itemDetails();
  }
  editItem(data: FuelReceived){
    this.service.editFuelReceived(this.id,data).pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (res) => {
        Notiflix.Notify.success('Updated!');
      }
    })
  }
  itemDetails(){
    Notiflix.Loading.dots('Loading...');
    this.service.getFuelReceivedDetails(this.id).subscribe({
      next: (res) => {
        Notiflix.Loading.remove();
        this.details = res;
        console.warn("rcvd:",res)
      }
    })
  }
  delete(){
    Notiflix.Loading.arrows('Deleting... please wait.')
    this.service.deleteFuelReceived(this.id).pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (res) => {
        Notiflix.Report.success(
          "Deleted!",
          'The fuel received was deleted successfully.',
          'Great',
        )
        Notiflix.Loading.remove();
      }
    })
  }
  delWarn(){
    Notiflix.Confirm.show(
      'Confirm update',
      "Are you sure you want to delete this fuel received? This action cannot be undone",
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

  // ngOnDestroy(){
  //   this.unsubscribe$.next();
  //   this.unsubscribe$.complete();
  // }
}


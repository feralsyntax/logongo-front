import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { Subject, takeUntil } from 'rxjs';
import { Contact } from 'src/app/classes/contact/contact';
import { User } from 'src/app/classes/user/user';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit, OnDestroy {
  @Input()
  reset!: () => void; 
  @Input()
  openContact!: () => void;
  @Input()
  reload!: () => void; 
  @Input() id: any; 
  @Input()
  admins!: User;
  delConfirmed: boolean = false;
  details!: Contact;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private service:AdminService
  ) { }

  ngOnInit(): void {
    this.contactDetails();
  }
  contactDetails(){
    Notiflix.Loading.dots('Loading...');
    this.service.getContactDetails(this.id).pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (res) => {
        Notiflix.Loading.remove();
        this.details = res;
      }
    })
  }
  delete(){
    Notiflix.Loading.arrows('Deleting... please wait.')
    this.service.deleteContact(this.id).subscribe({
      next: (res) => {
        Notiflix.Report.success(
          "Deleted!",
          'The contact was deleted successfully.',
          'Great',
        )
        Notiflix.Loading.remove();
      }
    })
  }
  delWarn(){
    Notiflix.Confirm.show(
      'Confirm update',
      "Are you sure you want to delete this contact? This action cannot be undone",
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
  redirect(){
    setTimeout(() => {
      this.openContact();
    }, 250)
  }

  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

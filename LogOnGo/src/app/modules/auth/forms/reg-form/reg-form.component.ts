import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { first } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { MyErrorStateMatcher } from '../../services/matcher/matcher.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css'],
})
export class RegFormComponent {
  company: string = 'LogOnGo';
  formValid: boolean = false;
  hide = true;
  hide2 = true;
  matcher = new MyErrorStateMatcher();
  emailExample = 'user@provider.com';

  constructor(private router: Router, private authService: AuthService) {}

  regForm = new FormGroup({
    username: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(4)])
    ),
    first_name: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(3)])
    ),
    last_name: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(3)])
    ),
    email: new FormControl(
      '',
      Validators.compose([Validators.email, Validators.required])
    ),
    petrol_station: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    password2: new FormControl('', Validators.required),
  });

  passwordsMatch(): boolean {
    return (
      this.regForm.controls.password.value ===
      this.regForm.controls.password2.value
    );
  }

  signUp(): void {
    Notiflix.Loading.hourglass('Processing, please wait...');
    this.authService
      .register(this.regForm.value)
      .pipe(first())
      .subscribe({
        next: (res) => {
          Notiflix.Notify.success('Registration successful!');
          this.router.navigate(['/auth']);
          Notiflix.Loading.remove();
        },
      });
  }
}

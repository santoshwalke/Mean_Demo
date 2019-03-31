import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
      private authService: AuthService,
      private router: Router) { }

  signInForm: FormGroup;
  buttonDisabled = false;
  invalidCredentials = false;

  ngOnInit() {
      this.signInForm = new FormGroup({
        txtUserName: new FormControl(null, [Validators.required]),
        txtPassword: new FormControl(null, [Validators.required])
      });

      this.signInForm.valueChanges
      .subscribe((changeObj: any) => {
          this.buttonDisabled = this.signInForm.valid;
      });

      this.authService.statusChange
      .subscribe(status => {
          if (status === 'success') {
            this.invalidCredentials = false;
            this.router.navigate(['book_ride']);
          } else {
            this.invalidCredentials = true;
          }
      });
  }

  onSubmit() {
     const userName = this.signInForm.get('txtUserName').value;
     const password = this.signInForm.get('txtPassword').value;
     this.authService.signin(userName, password);
  }

}

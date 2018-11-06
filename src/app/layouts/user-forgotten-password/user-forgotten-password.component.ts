import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-forgotten-password',
  templateUrl: './user-forgotten-password.component.html',
  styleUrls: ['./user-forgotten-password.component.css']
})

export class UserForgottenPasswordComponent implements OnInit {
  loaded: Boolean = true;
  showMessage: Boolean = false;
  email: string;
  constructor(public snack: MatSnackBar, public router: Router) { }

  ngOnInit() {
  }

  resetPassword() {
    this.loaded = false;
    setTimeout(() => {
      this.loaded = true;
      this.snack.open('Un e-mail vous a été envoyé. Merci de bien vouloir le regarder.', 'ok', {
        duration: 2000
      });
      setTimeout(() => {
        this.router.navigate(['user-login']);
      }, 2000);
    }, 2000);
  }

}

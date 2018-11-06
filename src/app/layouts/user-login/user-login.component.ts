import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { MatSnackBar } from '@angular/material';
import axios from 'axios';
import qs from 'qs';
import { Config } from '../../config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  email: string;
  password: string;
  loaded: Boolean = true;
  constructor(public cookies: CookieService, public snack: MatSnackBar, public router: Router) { }

  ngOnInit() {
  }

  openSnackBar(message: string, action: string) {
    this.snack.open(message, action, {
      duration: 2000
    });
  }


  login() {
    this.loaded = false;

    const params = {
      'email': this.email,
      'password': this.password
    };

    axios({
      method: 'post',
      url: Config.urlBase + 'etudiant/login',
      data: qs.stringify(params)
    })
      .then(response => {
        console.log(response.data);
        if (response.data.logged) {
          this.openSnackBar(response.data.message, null);
          this.cookies.set(
            'user',
            JSON.stringify({
              usertype: 'user',
              id: response.data.user_id
            })
          );

          setTimeout(() => {
            this.router.navigate(['user']);
          }, 2000);
        } else {
          this.openSnackBar(response.data.message, null);
        }

        this.loaded = true;
      })
      .catch(err => {
        this.loaded = true;
        console.log(err);
      });
  }

  facebookLogin() {

  }

}

import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import qs from 'qs';
import { Config } from '../../config';
import { MatSnackBar } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tuteur-login',
  templateUrl: './tuteur-login.component.html',
  styleUrls: ['./tuteur-login.component.css']
})
export class TuteurLoginComponent implements OnInit {
  email: string;
  password: string;
  loaded: Boolean = true;
  constructor(
    public snack: MatSnackBar,
    private cookies: CookieService,
    public router: Router
  ) { }

  ngOnInit() { }

  checkForm() {
    return this.fieldCheck(this.email)
      || this.fieldCheck(this.password);
  }

  fieldCheck(field: any) {
    return field === '' || field === undefined;
  }

  openSnackBar(message: string, action: string) {
    this.snack.open(message, action, {
      duration: 4000
    });
  }

  login() {
    const params = {
      email: this.email,
      password: this.password
    };

    this.loaded = false;

    axios({
      method: 'post',
      url: Config.urlBase + 'tuteur/login',
      data: qs.stringify(params)
    })
      .then(response => {
        console.log(response.data);
        if (response.data.logged) {
          if (response.data.authorized) {
            this.openSnackBar(response.data.message, null);
            this.cookies.set(
              'user',
              JSON.stringify({
                usertype: 'tuteur',
                id: response.data.tuteur_id
              })
            );
            setTimeout(() => {
              this.router.navigate(['tuteur']);
            }, 2000);
          } else {
            this.openSnackBar('Votre compte n\'a pas encore été approuvé par les administrateurs de Taléta', null);
          }
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
}

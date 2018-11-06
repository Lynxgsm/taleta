import { Component, OnInit, Input, Inject } from '@angular/core';
import axios from 'axios';
import { Config } from './../../../config';
import { CookieService } from 'ngx-cookie-service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import * as moment from 'moment';
import qs from 'qs';


@Component({
  selector: 'app-tuteur-info',
  templateUrl: './tuteur-info.component.html',
  styleUrls: ['./tuteur-info.component.css']
})
export class TuteurInfoComponent implements OnInit {
  tuteur: Object;
  rate: number;
  age: number;
  nom: string;
  prenom: string;
  adresse: string;
  email: string;
  tel: string;
  description: string;
  validated: Boolean;
  @Input() fromAdmin: Boolean = false;
  @Input() id: string;

  constructor(public cookies: CookieService) { }

  ngOnInit() {
    this.rate = 0;
    this.getTuteurInfo();
  }

  getTuteurInfo() {
    let user = null;
    if (this.fromAdmin) {
      user = this.id;
    } else {
      user = JSON.parse(this.cookies.get('user')).id;
    }

    axios
      .get(Config.urlBase + 'tuteur/get?id=' + user)
      .then(response => {
        this.nom = response.data.nom;
        this.prenom = response.data.prenom;
        this.adresse = response.data.adresse;
        this.email = response.data.email;
        this.description = response.data.description;
        this.tel = response.data.tel;
        this.id = response.data.id;
        this.validated = response.data.validated;
        this.age = new Date().getFullYear() - new Date(response.data.date_naissance).getFullYear();
      })
      .catch(err => {
        console.log(err);
      });
  }
}

// DIALOG ACTION ADMIN

@Component({
  selector: 'app-action-admin',
  templateUrl: 'action-admin.html',
})

export class DialogActionTuteurComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DialogActionTuteurComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public snack: MatSnackBar) { }

  ngOnInit() {

  }
}

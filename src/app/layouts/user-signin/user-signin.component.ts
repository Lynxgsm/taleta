import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import qs from 'qs';
import { Config } from '../../config';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD MMM YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css'],
  providers: [{ provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
  { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' }]
})
export class UserSigninComponent implements OnInit {
  loaded: Boolean = true;
  nom: string;
  prenom: string;
  adresse: string;
  date_naissance: string;
  quartier: string;
  ville: string;
  email: string;
  password: string;
  confirm_password: string;
  niveau: string;

  constructor(public snack: MatSnackBar, public router: Router) { }

  ngOnInit() {
  }

  checkForm() {
    return this.fieldCheck(this.nom)
      || this.fieldCheck(this.date_naissance)
      || this.fieldCheck(this.quartier)
      || this.fieldCheck(this.ville)
      || this.fieldCheck(this.email)
      || this.fieldCheck(this.password)
      || this.fieldCheck(this.niveau)
      || this.fieldCheck(this.adresse);
  }

  fieldCheck(field: any) {
    return field === '' || field === undefined;
  }

  openSnackBar(message: string, action: string) {
    this.snack.open(message, action, {
      duration: 2000
    });
  }


  signup() {
    this.loaded = false;

    const params = {
      'nom': this.nom,
      'prenom': this.prenom,
      'date_naissance': this.date_naissance,
      'email': this.email,
      'quartier': this.quartier,
      'ville': this.ville,
      'adresse': this.adresse,
      'niveau': this.niveau,
      'password': this.password
    };

    axios({
      method: 'post',
      url: Config.urlBase + 'etudiant/insert',
      data: qs.stringify(params)
    })
      .then(response => {
        this.openSnackBar('Votre compte a bien été crée. Vous allez être redirigé vers la fenêtre de connexion', null);
        setTimeout(() => {
          this.router.navigate(['user-login']);
        }, 2000);
        this.loaded = true;
      })
      .catch(err => {
        this.loaded = true;
        this.openSnackBar('Une erreur est survenue', null);
        console.log(err);
      });
  }

  selectedNiveau(event) {
    this.niveau = event;
  }

  selectedPays(event) {
    this.quartier = event.quartier;
    this.ville = event.ville;
    console.log(event);
  }

  selectedDate(event) {
    this.date_naissance = moment(event.value).format('YYYY-MM-DD');
  }
}

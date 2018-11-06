import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import axios from 'axios';
import { Config } from 'src/app/config';
import qs from 'qs';

@Component({
  selector: 'app-user-message',
  templateUrl: './user-message.component.html',
  styleUrls: ['./user-message.component.css']
})
export class UserMessageComponent implements OnInit {
  nom: string;
  prenom: string;
  objet: string;
  message: string;
  email: string;
  constructor(public snack: MatSnackBar) { }

  openSnackBar(message: string, action: string) {
    this.snack.open(message, action, {
      duration: 4000
    });
  }

  ngOnInit() {
  }

  sendMessage() {
    const params = {
      nom: this.nom,
      prenom: this.prenom,
      objet: this.objet,
      message: this.message,
      email: this.email
    };

    axios({
      method: 'post',
      data: qs.stringify(params),
      url: Config.urlBase + 'message/insert'
    }).then(response => {
      this.nom = this.prenom = this.objet = this.message = this.email = '';

      this.openSnackBar('Votre message a bien été envoyé aux administrateurs de Taléta. Merci.', null);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }).catch(err => {
      console.log(err);
    });
  }
}

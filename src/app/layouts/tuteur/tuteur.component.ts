import { Component, OnInit, Input } from '@angular/core';
import axios from 'axios';
import { Config } from './../../config';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-tuteur',
  templateUrl: './tuteur.component.html',
  styleUrls: ['./tuteur.component.css']
})
export class TuteurComponent implements OnInit {
  page: string;
  username: string;
  email: string;
  opened: Boolean = false;


  constructor(public cookies: CookieService, public router: Router) { }

  ngOnInit() {
    this.page = 'tuteur-home';
    this.checkIfConnected();
    this.getTuteurInfo(JSON.parse(this.cookies.get('user')).id);
  }

  checkIfConnected() {
    if (this.cookies.check('user')) {
      console.log('connected');
    } else {
      this.router.navigate(['tuteur-login']);
    }
  }

  changePage(p: string) {
    this.page = p;
    this.toggleSide(p);
  }

  getTuteurInfo(id: string) {
    axios
      .get(Config.urlBase + 'tuteur/get?id=' + id)
      .then(response => {
        console.log(response.data);
        this.email = response.data.email;
        this.username = response.data.nom + ' ' + response.data.prenom;
      })
      .catch(err => {
        console.log(err);
      });
  }

  toggleSide(e) {
    console.log('toogled');
    this.opened = !this.opened;
  }

  getReservations(id: string) {
    axios
      .get(Config.urlBase + '/reservation/getTuteurReservation?id=' + id)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
}

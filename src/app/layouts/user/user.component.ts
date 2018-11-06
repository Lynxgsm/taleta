import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Config } from '../../config';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  page: string;
  user: Object;
  nom: string;
  email: string;
  opened: Boolean;
  constructor(public cookies: CookieService) { }

  ngOnInit() {
    this.page = 'user-home';
  }

  changePage(p: string) {
    this.page = p;
  }

  getUserInfo(event) {
    this.nom = event.nom;
    this.email = event.email;
  }

  setSideState(event) {
    this.opened = !this.opened;
  }
}

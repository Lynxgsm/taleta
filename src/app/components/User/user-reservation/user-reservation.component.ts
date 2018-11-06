import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Config } from '../../../config';
import axios from 'axios';

@Component({
  selector: 'app-user-reservation',
  templateUrl: './user-reservation.component.html',
  styleUrls: ['./user-reservation.component.css']
})
export class UserReservationComponent implements OnInit {
  user: Object;
  reservations: any;
  constructor(private cookies: CookieService) { }
  ngOnInit() {
    this.getAllReservations(JSON.parse(this.cookies.get('user')).id);
  }

  getAllReservations(id: string) {
    axios.get(Config.urlBase + 'reservation/getEtudiantReservation?id=' + id).then(response => {
      this.reservations = response.data;
    }).catch(err => {
      console.log(err);
    });
  }
}

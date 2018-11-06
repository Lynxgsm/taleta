import { Component, OnInit, Inject } from '@angular/core';
import axios from 'axios';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import * as moment from 'moment';
import qs from 'qs';
import { Config } from '../../../config';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-tuteur-reservation',
  templateUrl: './tuteur-reservation.component.html',
  styleUrls: ['./tuteur-reservation.component.css']
})
export class TuteurReservationComponent implements OnInit {
  user: Object;
  reservations: any;
  constructor(public dialog: MatDialog, public cookies: CookieService) { }

  ngOnInit() {
    this.getAllReservations(JSON.parse(this.cookies.get('user')).id);
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }

  openDialog(data: any): void {
    const dialogRef = this.dialog.open(DialogReservationDetailComponent, {
      width: '450px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  getReservationDetails(id: string) {
    axios.get(Config.urlBase + 'reservation/get?id=' + id).then(response => {
      this.openDialog(response.data);
    }).catch(err => {
      console.log(err);
    });
  }

  getAllReservations(id: string) {
    axios.get(Config.urlBase + 'reservation/getTuteurReservation?id=' + id).then(response => {
      console.log(response.data);
      this.reservations = response.data;
    }).catch(err => {
      console.log(err);
    });
  }
}

// DIALOG PLACE

@Component({
  selector: 'app-dialog-reservation-details',
  templateUrl: 'reservation-details.html',
})

export class DialogReservationDetailComponent implements OnInit {
  title: string;
  nom: string;
  date: string;
  adresse: string;
  startHour: string;
  endHour: string;
  attente: string;
  id: string;
  accord: Boolean;

  constructor(
    public dialogRef: MatDialogRef<DialogReservationDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public snack: MatSnackBar) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.title = this.data.title;
    this.nom = this.data.etudiant.nom + ' ' + this.data.etudiant.prenom;
    this.adresse = this.data.adresse;
    this.startHour = this.data.start.split(' ')[1];
    this.endHour = this.data.end.split(' ')[1];
    this.attente = this.data.attente;
    this.id = this.data.id;
    this.accord = this.data.accord;
  }

  closeModal(): void {
    this.dialogRef.close(this.data);
  }

  openSnackBar(message: string, action: string) {
    this.snack.open(message, action, {
      duration: 2000
    });
  }

  acceptReservation() {
    const params = {
      id: this.id
    };

    axios({
      method: 'post',
      url: Config.urlBase + 'reservation/accept',
      data: qs.stringify(params)
    }).then(response => {
      console.log(response.data);
      if (response.data.validated) {
        this.openSnackBar('La réservation a été acceptée.', null);
      }
    }).catch(err => {
      console.log(err);
    });
  }
}

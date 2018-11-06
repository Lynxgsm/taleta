import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import axios from 'axios';
import * as moment from 'moment';
import qs from 'qs';
import { Config } from '../../../config';
import { CookieService } from 'ngx-cookie-service';

export interface Etudiant {
    nom: string;
    tel: string;
    adresse: string;
}

@Component({
    selector: 'app-search-tuteur',
    templateUrl: './search-tuteur.component.html',
    styleUrls: ['./search-tuteur.component.css']
})
export class SearchTuteurComponent implements OnInit {
    pays: string;
    ville: string;
    label_pays: string;
    label_date: string;
    date_reprise: string;
    prix_min: string;
    prix_max: string;
    matiere: string;
    niveau: string;
    attente: string;
    startTime: string;
    endTime: string;
    tuteurs = [];
    etudiant: Etudiant;
    isSearching: Boolean = false;
    loaded: Boolean = true;
    tel: string;
    nom: string;
    adresse: string;
    IDSelectedTuteur: string;
    askForReservation: Boolean = false;

    @Input() notitle: Boolean;
    @Input() nonote: Boolean;
    @Input() onhome: Boolean;
    @Input() userinfo: any;

    constructor(public dialog: MatDialog, private cookies: CookieService) { }

    ngOnInit() {
        this.getUserInfo();
    }

    getUserInfo() {
        try {
            axios.get(Config.urlBase + 'etudiant/get?id=' + JSON.parse(this.cookies.get('user')).id).then(response => {
                this.nom = response.data.nom + ' ' + response.data.prenom;
                this.adresse = response.data.adresse;
                this.tel = response.data.tel;
            }).catch(err => {
                console.log(err);
            });
        } catch (e) {
            console.log(e);
        }
    }

    searchTuteur() {
        this.loaded = false;
        axios.get(Config.urlBase + `tuteur/searchTuteur?matiere=${this.matiere}
    &niveau=${this.niveau}&localisation=${this.label_pays}&date_cours=${this.label_date}
    &prix_min=${this.prix_min}&prix_max=${this.prix_max}`).then(response => {
                // this.tuteurs = response.data;
                response.data.forEach(tuteur => {
                    this.tuteurs.push({
                        'id': tuteur.id,
                        'nom': tuteur.nom,
                        'prenom': tuteur.prenom,
                        'description': tuteur.description,
                        'cours': 'Français - 2nd',
                        'age': new Date().getFullYear() - new Date(tuteur.date_naissance).getFullYear()
                    });
                });
                this.isSearching = true;
                this.loaded = true;
            }).catch(err => {
                console.log(err);
            });
    }

    selectedMatiere(event) {
        this.matiere = event;
    }

    selectedNiveau(event) {
        this.niveau = event;
    }

    setStartTime(event) {
        this.startTime = event;
        console.log(event);
    }

    setEndTime(event) {
        this.endTime = event;
        console.log(event);
    }

    selectedDateCours(event) {
        this.label_date = moment(event.value).format('YYYY-MM-DD');
        this.date_reprise = moment(event.value).format('YYYY-MM-DD');
    }

    closeDialog(): void {
        this.dialog.closeAll();
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogPlaceComponent, {
            width: '650px'
        });

        dialogRef.afterClosed().subscribe(result => {
            this.pays = result.pays;
            this.ville = result.ville;
            this.label_pays = result.quartier;
            console.log(this.ville);
        });
    }

    openDateDialog(): void {
        const dialogRef = this.dialog.open(DialogDateComponent, {
            width: '650px'
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            this.label_date = result.startDate + ' à ' + result.finalDate;
        });
    }

    profileAction(event) {
        console.log(event);

        if (event.action === 'reserver') {
            this.askForReservation = true;
            this.IDSelectedTuteur = event.id;
        }
    }

    setReservation() {
        const params = {
            IDEtudiant: JSON.parse(this.cookies.get('user')).id,
            IDTuteur: this.IDSelectedTuteur,
            IDMatiere: this.matiere,
            IDNiveau: this.niveau,
            startDate: this.label_date + ' ' + this.startTime,
            endDate: this.label_date + ' ' + this.endTime,
            adresse: this.adresse,
            attente: this.attente,
        };

        axios({
            method: 'post',
            url: Config.urlBase + 'reservation/insert',
            data: qs.stringify(params)
        }).then(response => {
            console.log(response.data);
        }).catch(err => {
            console.log(err);
        });
    }
}

// DIALOG PLACE

@Component({
    selector: 'app-dialog-place',
    templateUrl: 'dialog-place.html',
})

export class DialogPlaceComponent {
    constructor(
        public dialogRef: MatDialogRef<DialogPlaceComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    closeModal(): void {
        this.dialogRef.close(this.data);
    }

    getPlace(event) {
        this.data = event;
        console.log(this.data);
    }
}

// DIALOG DATE

@Component({
    selector: 'app-dialog-date',
    templateUrl: 'dialog-date.html',
})

export class DialogDateComponent {
    startDate: string;
    finalDate: string;

    constructor(
        public dialogRef: MatDialogRef<DialogPlaceComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    closeModal(): void {
        this.data = {
            'startDate': this.startDate,
            'finalDate': this.finalDate
        };

        this.dialogRef.close(this.data);
    }

    selectedStartDate(event) {
        this.startDate = moment(event.value).format('YYYY-MM-DD');
    }

    selectedFinalDate(event) {
        this.finalDate = moment(event.value).format('YYYY-MM-DD');
    }
}

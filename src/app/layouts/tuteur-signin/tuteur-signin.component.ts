import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import axios from 'axios';
import qs from 'qs';
import { Config } from '../../config';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-tuteur-signin',
    templateUrl: './tuteur-signin.component.html',
    styleUrls: ['./tuteur-signin.component.css']
})
export class TuteurSigninComponent implements OnInit {
    isLinear: Boolean = false;
    loaded: Boolean = true;
    nom: string;
    prenom: string;
    adresse: string;
    description: string;
    tel: string;
    email: string;
    password: string;
    quartier: string;
    ville: string;
    selectedDate: string;
    date_naissance: string;
    cv: File;
    lettre_motivation: File;
    cin: File;

    constructor(public snack: MatSnackBar) { }

    openSnackBar(message: string, action: string, duration: number) {
        this.snack.open(message, action, {
            duration: duration
        });
    }

    checkForm() {
        return this.fieldCheck(this.nom)
            || this.fieldCheck(this.date_naissance)
            || this.fieldCheck(this.quartier)
            || this.fieldCheck(this.ville)
            || this.fieldCheck(this.email)
            || this.fieldCheck(this.password)
            || this.fieldCheck(this.description)
            || this.fieldCheck(this.adresse)
            || this.fieldCheck(this.cin)
            || this.fieldCheck(this.lettre_motivation)
            || this.fieldCheck(this.cv);
    }

    fieldCheck(field: any) {
        return field === '' || field === undefined;
    }

    getVille(event) {
        console.log(event);
        this.quartier = event.quartier;
        this.ville = event.ville;
    }

    selectedFinalDate(event) {
        this.date_naissance = moment(event.value).format('YYYY-MM-DD');
    }

    ngOnInit() { }

    signin() {
        const params = {
            nom: this.nom,
            prenom: this.prenom,
            email: this.email,
            tel: this.tel,
            adresse: this.adresse,
            quartier: this.quartier,
            ville: this.ville,
            password: this.password,
            description: this.description,
            date_naissance: this.date_naissance
        };

        if (this.nom === '' || this.nom === undefined || this.email === '' ||
            this.email === undefined || this.password === '' || this.password === undefined) {
            this.openSnackBar('Veuillez remplir les cases obligatoires', null, 2000);
        } else {
            axios({
                method: 'post',
                url: Config.urlBase + 'tuteur/insert',
                data: qs.stringify(params)
            }).then(response => {
                this.uploadFile(response.data.id, '#cv', 'cv');
                this.uploadFile(response.data.id, '#lettre_motivation', 'lettre_motivation');
                this.uploadFile(response.data.id, '#cin', 'cin');
                this.openSnackBar('Votre dossier a bien été pris en compte.', null, 3000);
                setTimeout(() => {
                    document.getElementById('finishSignin').click();
                }, 3000);
            }).catch(err => {
                this.openSnackBar('Veuillez remplir toutes les informations.', null, 2000);
                console.log(err);
            });
        }
    }

    uploadFile(id, file, type) {
        const c = Array.from(document.querySelectorAll(file));
        const formData = new FormData();

        c.forEach(item => {
            formData.append('file', item.files[0]);
            formData.append('type', type);
            formData.append('id', id);
        });

        axios({
            method: 'post',
            url: Config.urlBase + 'tuteur/uploadFile',
            data: formData
        }).then(response => {
            console.log(response.data);
            return true;
        }).catch(err => {
            console.log(err);
            return false;
        });
    }
}

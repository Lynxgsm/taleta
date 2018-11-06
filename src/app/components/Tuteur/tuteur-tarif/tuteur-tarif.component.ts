import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import axios from 'axios';
import qs from 'qs';
import { Config } from '../../../config';

@Component({
    selector: 'app-tuteur-tarif',
    templateUrl: './tuteur-tarif.component.html',
    styleUrls: ['./tuteur-tarif.component.css']
})
export class TuteurTarifComponent implements OnInit {
    tarifs = [];
    prix: string;
    matiere: string;
    loaded: Boolean = true;
    niveau: string;
    max: number;
    min: number;

    constructor(private cookies: CookieService) { }

    ngOnInit() {
        this.getAllTarifs();
    }

    getAllTarifs() {
        axios.get(Config.urlBase + 'capacite/get?id=' + JSON.parse(this.cookies.get('user')).id).then(response => {
            console.log(response.data);
            this.tarifs = response.data;
        }).catch(err => {
            console.log(err);
        });
    }

    loadTarif() {
        axios.get(Config.urlBase + `tarif/checkMinMax?niveau=${this.niveau}&matiere=${this.matiere}`).then(response => {
            console.log(response.data);
            this.max = response.data.max;
            this.min = response.data.min;
        }).catch(err => {
            console.log(err);
        });
    }

    assignTarif() {
        const params = {
            niveau: this.niveau,
            matiere: this.matiere,
            tuteur: JSON.parse(this.cookies.get('user')).id
        };

        this.loaded = false;

        axios({
            method: 'post',
            url: Config.urlBase + 'tarif/insert',
            data: qs.stringify(params)
        }).then(response => {
            console.log(response.data);
        }).catch(err => {
            console.log(err);
        });
    }

    selectNiveau(e) {
        this.niveau = e;
        console.log(e, this.matiere);

        if (this.matiere !== undefined) {
            this.loadTarif();
        }
    }

    selectMatiere(e) {
        this.matiere = e;
        console.log(e);
        if (this.niveau !== undefined) {
            this.loadTarif();
        }
    }

}

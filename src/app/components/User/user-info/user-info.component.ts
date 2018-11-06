import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import axios from 'axios';
import { CookieService } from 'ngx-cookie-service';
import { Config } from '../../../config';

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
    user: any;
    age: number;
    @Output() user_info: EventEmitter<any> = new EventEmitter();
    constructor(public cookies: CookieService) { }

    ngOnInit() {
        this.getUserInfo();
    }

    getUserInfo() {
        axios.get(Config.urlBase + 'etudiant/get?id=' + JSON.parse(this.cookies.get('user')).id).then(response => {
            this.user = response.data;
            this.age = new Date().getFullYear() - new Date(this.user.date_naissance).getFullYear();
            this.user_info.emit({
                'nom': this.user.nom + ' ' + this.user.prenom,
                'email': this.user.email
            });
        }).catch(err => {
            console.log(err);
        });
    }
}

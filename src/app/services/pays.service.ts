import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './../config';

@Injectable({
  providedIn: 'root'
})
export class PaysService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(Config.urlBase + 'pays/getAll');
  }

  getVilleByPays(pays: string) {
    return this.http.get(Config.urlBase + 'villes/getAll?id=' + pays);
  }
}

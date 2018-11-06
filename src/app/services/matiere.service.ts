import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './../config';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {
  constructor(private http: HttpClient) {}

  getAllMatieres() {
    return this.http.get(Config.urlBase + 'matiere/getAll');
  }
}

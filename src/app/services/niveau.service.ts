import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './../config';

@Injectable({
  providedIn: 'root'
})
export class NiveauService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(Config.urlBase + 'niveau/getAll');
  }
}

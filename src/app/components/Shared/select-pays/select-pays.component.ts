import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import axios from 'axios';
import { Config } from '../../../config';

@Component({
  selector: 'app-select-pays',
  templateUrl: './select-pays.component.html',
  styleUrls: ['./select-pays.component.css']
})
export class SelectPaysComponent implements OnInit {
  pays = [];
  villes = [];
  quartiers = [];
  selectedPays: string;
  selectedVille: string;
  selectedQuartier: string;
  @Output() getLocation: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.getAllVilles();
  }

  getAllVilles() {
    axios.get(Config.urlBase + '/ville/getAll').then(response => {
      this.villes = response.data;
    }).catch(err => {
      console.log(err);
    });
  }

  getQuartier(event) {
    this.selectedVille = event.value;
    axios.get(Config.urlBase + '/quartier/getByVille?id=' + event.value).then(response => {
      this.quartiers = response.data;
    }).catch(err => {
      console.log(err);
    });
  }

  selectionVille(event) {
    this.getLocation.emit({
      'ville': event.option.value
    });
  }

  selectionQuartier(event) {
    console.log({
      'ville': this.selectedVille,
      'quartier': event.option.value
    });
    this.getLocation.emit({
      'ville': this.selectedVille,
      'quartier': event.option.value
    });
  }
}

import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Config } from 'src/app/config';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teams = [];
  constructor() { }

  ngOnInit() {
    this.getAllTeams();
  }

  getAllTeams() {
    axios.get(Config.urlBase + 'team/getAll').then(response => {
      this.teams = response.data;
      console.log(response.data);
    }).catch(err => {
      console.log(err);
    });
  }

}

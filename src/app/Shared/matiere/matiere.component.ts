import { Component, OnInit } from '@angular/core';

export interface Matiere {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.css']
})
export class MatiereComponent implements OnInit {
  foods: Matiere[] = [
    { value: 'steak-0', viewValue: 'Français' },
    { value: 'pizza-1', viewValue: 'Mathématiques' },
    { value: 'tacos-2', viewValue: 'Physique-Chimie' }
  ];

  constructor() { }

  ngOnInit() {
  }

}

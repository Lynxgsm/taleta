import { Component, OnInit } from '@angular/core';

export interface Matiere {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-niveau',
  templateUrl: './niveau.component.html',
  styleUrls: ['./niveau.component.css']
})
export class NiveauComponent implements OnInit {

  foods: Matiere[] = [
    { value: 'steak-0', viewValue: '6ème' },
    { value: 'pizza-1', viewValue: '5ème' },
    { value: 'tacos-2', viewValue: '3ème' },
    { value: 'steak-0', viewValue: 'Seconde Générale' },
    { value: 'pizza-1', viewValue: 'Seconde Technique' },
    { value: 'tacos-2', viewValue: 'Seconde Professionnelle' },
    { value: 'steak-0', viewValue: '6ème' },
    { value: 'pizza-1', viewValue: '5ème' },
    { value: 'tacos-2', viewValue: '4ème' },
    { value: 'steak-0', viewValue: '6ème' },
    { value: 'pizza-1', viewValue: '5ème' },
    { value: 'tacos-2', viewValue: '4ème' },
    { value: 'steak-0', viewValue: '6ème' },
    { value: 'pizza-1', viewValue: '5ème' },
    { value: 'tacos-2', viewValue: '4ème' },
    { value: 'steak-0', viewValue: '6ème' },
    { value: 'pizza-1', viewValue: '5ème' },
    { value: 'tacos-2', viewValue: '4ème' },
    { value: 'steak-0', viewValue: '6ème' },
    { value: 'pizza-1', viewValue: '5ème' },
    { value: 'tacos-2', viewValue: '4ème' },
  ];

  constructor() { }

  ngOnInit() {
  }

}

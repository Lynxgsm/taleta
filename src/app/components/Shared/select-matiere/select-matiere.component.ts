import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatiereService } from './../../../services/matiere.service';

@Component({
  selector: 'app-select-matiere',
  templateUrl: './select-matiere.component.html',
  styleUrls: ['./select-matiere.component.css']
})
export class SelectMatiereComponent implements OnInit {
  matieres: any;
  @Output() getMatiere: EventEmitter<any> = new EventEmitter();

  constructor(private matiereService: MatiereService) { }

  ngOnInit() {
    this.matiereService
      .getAllMatieres()
      .subscribe(data => (this.matieres = data));
  }

  selectedMatiere(event) {
    this.getMatiere.emit(event.value);
  }
}

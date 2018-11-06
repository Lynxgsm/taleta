import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NiveauService } from '../../../services/niveau.service';

@Component({
  selector: 'app-select-niveau',
  templateUrl: './select-niveau.component.html',
  styleUrls: ['./select-niveau.component.css']
})
export class SelectNiveauComponent implements OnInit {
  niveaux: any;
  @Output() getNiveau: EventEmitter<any> = new EventEmitter();

  constructor(private niveauService: NiveauService) { }

  ngOnInit() {
    this.niveauService.getAll().subscribe(data => (this.niveaux = data));
  }

  selectedNiveau(event) {
    this.getNiveau.emit(event.value);
  }
}

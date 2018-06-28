import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tuteur-card',
  templateUrl: './tuteur-card.component.html',
  styleUrls: ['./tuteur-card.component.css']
})
export class TuteurCardComponent implements OnInit {
  @Input() name;
  @Input() emploi;
  @Input() image;
  @Input() age;
  color: String = 'blanchedalmond';
  imageUrl: String = '';
  constructor() { }

  ngOnInit() {

  }

}

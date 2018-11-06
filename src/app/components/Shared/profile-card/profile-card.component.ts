import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Config } from 'src/app/config';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  @Input() nom;
  @Input() prenom;
  @Input() linkedIn;
  @Input() skype;
  @Input() facebook;
  @Input() id;
  @Input() fonction;
  @Input() photo;
  @Input() email;
  @Input() description;
  @Output() getAction: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (this.photo !== '') {
      this.photo = Config.fileUrl + this.photo;
    } else {
      this.photo = '../../../../assets/media/user.png';
    }
  }

  reserver(id: string) {
    this.getAction.emit({
      action: 'reserver',
      id: id
    });

    console.log('emit reserver');
  }

  info(id: string) {
    this.getAction.emit({
      action: 'info',
      id: id
    });

    console.log('emit info');
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import axios from 'axios';
import { CookieService } from 'ngx-cookie-service';
import { Config } from '../../../config';

@Component({
  selector: 'app-tuteur-planning',
  templateUrl: './tuteur-planning.component.html',
  styleUrls: ['./tuteur-planning.component.css']
})
export class TuteurPlanningComponent implements OnInit {
  calendarOptions: Options;
  @ViewChild(CalendarComponent)
  ucCalendar: CalendarComponent;
  constructor(public cookies: CookieService) { }
  ngOnInit() {
    this.getAllEvents();
  }

  getAllEvents() {
    axios.get(Config.urlBase + 'event/get?id=' + JSON.parse(this.cookies.get('user')).id).then(response => {
      console.log();
      this.calendarOptions = {
        header: {
          left: 'title',
          center: '',
          right: 'prev,next'
        },
        titleFormat: 'DD MMMM YYYY',
        showNonCurrentDates: true,
        locale: 'fr',
        selectable: true,
        displayEventTime: false,
        eventSources: [{
          events: response.data,
          color: 'black',
          textColor: 'yellow'
        }]
      };
    }).catch(err => {
      console.log(err);
    });
  }
}

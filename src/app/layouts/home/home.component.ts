import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isConnected: Boolean;
  constructor(private cookies: CookieService) { }

  ngOnInit() {
    this.cookies.check('user') ? this.isConnected = true : this.isConnected = false;
  }

}

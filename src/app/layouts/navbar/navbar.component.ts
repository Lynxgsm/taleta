import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input()
  isConnected: Boolean;
  @Output() setSideState: EventEmitter<any> = new EventEmitter();
  isInAdmin: Boolean;
  url: string;
  opened: Boolean = false;
  constructor(
    private cookies: CookieService,
    public snack: MatSnackBar,
    public router: Router
  ) { }

  ngOnInit() {
    this.isInAdmin = <Boolean>this.isInAdmin;

    if (this.cookies.check('user')) {
      if (JSON.parse(this.cookies.get('user')).usertype === 'tuteur') {
        this.url = 'tuteur';
      } else {
        this.url = 'user';
      }

      this.isConnected = true;
    } else {
      this.isConnected = false;
    }
  }

  toggleSideBar() {
    this.setSideState.emit({
      condition: true
    });

    this.opened = !this.opened;
    this.opened ? document.getElementById('mySidenav').style.width = '350px' : document.getElementById('mySidenav').style.width = '0';
  }

  openSnackBar(message: string, action: string) {
    this.snack.open(message, action, {
      duration: 2000
    });
  }

  signout() {
    this.openSnackBar('Vous allez être déconnecté', null);
    const user = JSON.parse(this.cookies.get('user'));
    setTimeout(() => {
      if (user.usertype === 'tuteur') {
        this.cookies.deleteAll();
        this.router.navigate(['tuteur-login']);
      } else {
        this.cookies.deleteAll();
        this.router.navigate(['user-login']);
      }
    }, 2000);
  }
}

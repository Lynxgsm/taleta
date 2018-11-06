import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SwPush } from '@angular/service-worker';

export const VAPID_KEYS = {
    publicKey: 'BBjM017n51f2sSC4eLqxbZrvUtsVq7mAYDp6T1iJh8X0Z2uVTJQQbwHlc1w6QEn5fi2Vg2evbnhYdOEdO61jLdk',
    privateKey: 'u7rjDLBflH6rwjZCseLlAubDgou4Rc5AvvRBP2cfsYQ'
};

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    readonly VAPID_PUBLIC_KEY = VAPID_KEYS.publicKey;

    constructor(private swPush: SwPush, private route: Router, private activedRoute: ActivatedRoute) { }
    title = 'taleta';

    ngOnInit() { }
}

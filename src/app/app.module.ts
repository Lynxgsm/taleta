import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { BarRatingModule } from 'ngx-bar-rating';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

import {
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatBadgeModule,
    MatMenuModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatRadioModule
} from '@angular/material';
import { FullCalendarModule } from 'ng-fullcalendar';
import {
    SocialLoginModule,
    AuthServiceConfig,
    FacebookLoginProvider,
} from 'angular-6-social-login';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './layouts/home/home.component';
import { SearchTuteurComponent, DialogPlaceComponent, DialogDateComponent } from './components/Home/search-tuteur/search-tuteur.component';
import { WhoAreWeComponent } from './components/Home/who-are-we/who-are-we.component';
import { TeamComponent } from './components/Home/team/team.component';
import { WhyUsComponent } from './components/Home/why-us/why-us.component';
import { HowItWorksComponent } from './components/Home/how-it-works/how-it-works.component';
import { ContactComponent } from './components/Home/contact/contact.component';
import { TuteurComponent } from './layouts/tuteur/tuteur.component';
import { TuteurSigninComponent } from './layouts/tuteur-signin/tuteur-signin.component';
import { TuteurLoginComponent } from './layouts/tuteur-login/tuteur-login.component';
import { UserComponent } from './layouts/user/user.component';
import { UserSigninComponent } from './layouts/user-signin/user-signin.component';
import { UserLoginComponent } from './layouts/user-login/user-login.component';
import { LoginComponent } from './layouts/login/login.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { UserMessageComponent } from './components/Home/user-message/user-message.component';
import { AppRoutingModule } from './app-routing.module';
import { SelectMatiereComponent } from './components/Shared/select-matiere/select-matiere.component';
import { SelectNiveauComponent } from './components/Shared/select-niveau/select-niveau.component';
import { MatiereService } from './services/matiere.service';
import { NiveauService } from './services/niveau.service';
import { PaysService } from './services/pays.service';
import { VilleService } from './services/ville.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SelectPaysComponent } from './components/Shared/select-pays/select-pays.component';
import {
    TuteurReservationComponent,
    DialogReservationDetailComponent
} from './components/Tuteur/tuteur-reservation/tuteur-reservation.component';
import { TuteurPlanningComponent } from './components/Tuteur/tuteur-planning/tuteur-planning.component';
import { TuteurTarifComponent } from './components/Tuteur/tuteur-tarif/tuteur-tarif.component';
import { UserReservationComponent } from './components/User/user-reservation/user-reservation.component';
import { UserPaiementComponent } from './components/User/user-paiement/user-paiement.component';
import { UserPlanningComponent } from './components/User/user-planning/user-planning.component';
import { UserSettingComponent } from './components/User/user-setting/user-setting.component';
import { TuteurSettingComponent } from './components/Tuteur/tuteur-setting/tuteur-setting.component';
import { TuteurInfoComponent, DialogActionTuteurComponent } from './components/Tuteur/tuteur-info/tuteur-info.component';
import { UserInfoComponent } from './components/User/user-info/user-info.component';
import { ProfileCardComponent } from './components/Shared/profile-card/profile-card.component';
import { FilterPipe } from './filter.pipe';
import { SearchTuteurProfileComponent } from './components/Tuteur/search-tuteur-profile/search-tuteur-profile.component';
import { TuteurAvisComponent } from './components/Tuteur/tuteur-avis/tuteur-avis.component';
import { CguComponent } from './layouts/cgu/cgu.component';
import { UserForgottenPasswordComponent } from './layouts/user-forgotten-password/user-forgotten-password.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SearchTuteurComponent,
        WhoAreWeComponent,
        TeamComponent,
        WhyUsComponent,
        HowItWorksComponent,
        ContactComponent,
        TuteurComponent,
        TuteurSigninComponent,
        TuteurLoginComponent,
        UserComponent,
        UserSigninComponent,
        UserLoginComponent,
        LoginComponent,
        NavbarComponent,
        FooterComponent,
        SidebarComponent,
        UserMessageComponent,
        SelectMatiereComponent,
        SelectNiveauComponent,
        SelectPaysComponent,
        TuteurReservationComponent,
        TuteurPlanningComponent,
        TuteurTarifComponent,
        UserReservationComponent,
        UserPaiementComponent,
        UserPlanningComponent,
        UserSettingComponent,
        TuteurSettingComponent,
        TuteurInfoComponent,
        UserInfoComponent,
        DialogPlaceComponent,
        DialogDateComponent,
        DialogReservationDetailComponent,
        DialogActionTuteurComponent,
        ProfileCardComponent,
        FilterPipe,
        SearchTuteurProfileComponent,
        TuteurAvisComponent,
        CguComponent,
        UserForgottenPasswordComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatDialogModule,
        MatStepperModule,
        MatAutocompleteModule,
        MatSelectModule,
        MatFormFieldModule,
        MatSidenavModule,
        MatInputModule,
        SlickCarouselModule,
        NgxMaterialTimepickerModule.forRoot(),
        MatListModule,
        ModalDialogModule.forRoot(),
        MatDatepickerModule,
        MatSnackBarModule,
        FormsModule,
        MatNativeDateModule,
        FullCalendarModule,
        MatCardModule,
        MatRadioModule,
        MatIconModule,
        MatBadgeModule,
        MatTabsModule,
        MatMenuModule,
        BarRatingModule,
        MatProgressSpinnerModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production
        }),
        BrowserAnimationsModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [
        CookieService,
        MatiereService,
        NiveauService,
        PaysService,
        VilleService
    ],
    bootstrap: [AppComponent],
    entryComponents: [DialogPlaceComponent, DialogDateComponent, DialogReservationDetailComponent, DialogActionTuteurComponent]
})
export class AppModule { }

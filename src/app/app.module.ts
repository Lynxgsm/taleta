import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlModule } from 'ngx-owl-carousel';

// MATERIAL COMPONENTS
import {
  MatToolbarModule,
  MatButtonModule,
  MatSelectModule,
  MatCardModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule,
  MatOptionModule,
  MatIconModule,
  MatStepperModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderComponent } from './Components/header/header.component';
import { HomeViewComponent } from './Components/home-view/home-view.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MatiereComponent } from './Shared/matiere/matiere.component';
import { NiveauComponent } from './Shared/niveau/niveau.component';
import { TuteurCardComponent } from './Shared/tuteur-card/tuteur-card.component';
import { DateComponent } from './Shared/date/date.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LocationComponent } from './Shared/location/location.component';
import { LoginComponent } from './Components/login/login.component';
import { TuteurViewComponent } from './Components/tuteur-view/tuteur-view.component';
import { NewTuteurComponent } from './Components/new-tuteur/new-tuteur.component';
import { NewUserComponent } from './Components/new-user/new-user.component';
import { ReservationViewComponent } from './Components/reservation-view/reservation-view.component';
import { WhyUsComponent } from './Components/why-us/why-us.component';
import { HowItWorksComponent } from './Components/how-it-works/how-it-works.component';
import { WhoWeAreComponent } from './Components/who-we-are/who-we-are.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeViewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tuteur-signin', component: TuteurViewComponent },
  { path: 'tuteur-new', component: NewTuteurComponent },
  { path: 'user-connect', component: NewUserComponent },
  // { path: 'hero/:id', component: HeroDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeViewComponent,
    FooterComponent,
    MatiereComponent,
    NiveauComponent,
    TuteurCardComponent,
    DateComponent,
    NavbarComponent,
    LocationComponent,
    LoginComponent,
    TuteurViewComponent,
    NewTuteurComponent,
    NewUserComponent,
    ReservationViewComponent,
    WhyUsComponent,
    HowItWorksComponent,
    WhoWeAreComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatIconModule,
    MatStepperModule,
    FormsModule,
    OwlModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

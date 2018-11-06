import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './layouts/user-login/user-login.component';
import { UserComponent } from './layouts/user/user.component';
import { TuteurComponent } from './layouts/tuteur/tuteur.component';
import { TuteurSigninComponent } from './layouts/tuteur-signin/tuteur-signin.component';
import { TuteurLoginComponent } from './layouts/tuteur-login/tuteur-login.component';
import { HomeComponent } from './layouts/home/home.component';
import { UserSigninComponent } from './layouts/user-signin/user-signin.component';
import { TuteurPlanningComponent } from './components/Tuteur/tuteur-planning/tuteur-planning.component';
import { TuteurReservationComponent } from './components/Tuteur/tuteur-reservation/tuteur-reservation.component';
import { TuteurTarifComponent } from './components/Tuteur/tuteur-tarif/tuteur-tarif.component';
import { CguComponent } from './layouts/cgu/cgu.component';
import { UserForgottenPasswordComponent } from './layouts/user-forgotten-password/user-forgotten-password.component';

const routes: Routes = [
  { path: 'user-login', component: UserLoginComponent },
  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'user-signin', component: UserSigninComponent },
  { path: 'user-password', component: UserForgottenPasswordComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'tuteur', component: TuteurComponent },
  { path: 'cgu', component: CguComponent },
  { path: 'tuteur-planning', component: TuteurPlanningComponent },
  { path: 'tuteur-reservation', component: TuteurReservationComponent },
  { path: 'tuteur-signin', component: TuteurSigninComponent },
  { path: 'tuteur-tarif', component: TuteurTarifComponent },
  { path: 'tuteur-login', component: TuteurLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

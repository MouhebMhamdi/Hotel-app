import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/auth/login/login.component';
import { SignupComponent } from './Pages/auth/signup/signup.component';
import { ReservationsComponent } from './Pages/reservations/reservations.component';
import { HomeComponent } from './Shared/home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"hotels",redirectTo:"/"},
  {path:"reservation",component:ReservationsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

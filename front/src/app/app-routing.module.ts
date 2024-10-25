import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { PaymentsComponent } from './payments/payments.component';
import { LoadetudiantsComponent } from './loadetudiants/loadetudiants.component';
import { LoadpaymentsComponent } from './loadpayments/loadpayments.component';
import {AuthorizationGuard} from "./guards/authorization.guard";
import {AuthGuard} from "./guards/auth.guard";
import {DetailpaymentComponent} from "./detailpayment/detailpayment.component";
import {FairepaymentComponent} from "./fairepayment/fairepayment.component";

const routes: Routes = [
  {path : "", component : LoginComponent},
  {path : "login", component : LoginComponent},
  {path : "admin", component : AdminComponent,
    canActivate : [AuthGuard],
    children : [
      {path : "home", component : HomeComponent},
      {path : "profile", component : ProfileComponent},
      {path : "students", component : EtudiantsComponent},
      {path : "payments", component : PaymentsComponent},
      {path : "plus/:code", component : DetailpaymentComponent},
      {path : "eff/:code", component : FairepaymentComponent},
      {
        path : "loadStudents", component : LoadetudiantsComponent,
        canActivate : [AuthorizationGuard], data : {roles : ['ADMIN']}
      },
      {
        path : "loadPayments", component : LoadpaymentsComponent,
        canActivate : [AuthorizationGuard], data : {roles : ['ADMIN']}
      },
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

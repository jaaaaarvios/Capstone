import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent} from '../app/homepage/homepage.component';
import { LoginformComponent } from '../app/loginform/loginform.component';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import {BookingformComponent} from '../app/bookingform/bookingform.component';
import {ServicedetailsComponent} from '../app/servicedetails/servicedetails.component';
import {ProfileformComponent} from '../app/profileform/profileform.component';
import{ConfirmcancelComponent} from '../app/confirmcancel/confirmcancel.component';
import {RequestdetailsComponent} from '../app/requestdetails/requestdetails.component';
import {PaymentformComponent} from '../app/paymentform/paymentform.component';
const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'loginform', component: LoginformComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'bookingform', component: BookingformComponent },
  { path: 'servicedetails', component: ServicedetailsComponent },
  { path: 'profileform', component: ProfileformComponent },
  { path: 'confirmcancel', component: ConfirmcancelComponent },
  { path: 'requestdetails', component: RequestdetailsComponent },
  { path: 'paymentform', component: PaymentformComponent }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

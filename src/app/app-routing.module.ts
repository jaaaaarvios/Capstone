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
import {AdminpageComponent} from '../app/adminpage/adminpage.component';
import {TechniciansComponent} from '../app/technicians/technicians.component';
import {TechprofileComponent} from '../app/techprofile/techprofile.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { AircondetailsComponent } from './aircondetails/aircondetails.component';
import { RefrigeratordetailsComponent } from './refrigeratordetails/refrigeratordetails.component';
import { ElectricfandetailsComponent } from './electricfandetails/electricfandetails.component';
import { WashingmachinedetailsComponent } from './washingmachinedetails/washingmachinedetails.component';
import { TelevisiondetailsComponent } from './televisiondetails/televisiondetails.component';
import { CleaningComponent } from './cleaning/cleaning.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'login', component: LoginformComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'booking', component: BookingformComponent },
  { path: 'servicedetails', component: ServicedetailsComponent },
  { path: 'profile', component: ProfileformComponent },
  { path: 'confirmcancel', component: ConfirmcancelComponent },
  { path: 'requestdetails', component: RequestdetailsComponent },
  { path: 'payment', component: PaymentformComponent },
  { path: 'employees', component: PaymentformComponent },
  { path: 'payment', component: PaymentformComponent },
  { path: 'admin', component: AdminpageComponent },
  { path: 'technicians', component: TechniciansComponent },
  { path: 'techprofile', component: TechprofileComponent },
  { path: 'appliance', component: AppliancesComponent },
  { path: 'aircon', component: AircondetailsComponent },
  { path: 'refrigerator', component: RefrigeratordetailsComponent },
  { path: 'electricfan', component: ElectricfandetailsComponent },
  { path: 'washingmachine', component: WashingmachinedetailsComponent },
  { path: 'television', component: TelevisiondetailsComponent },
  { path: 'cleaning', component: CleaningComponent },
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

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
import { ApplianceCleaningComponent } from './appliance-cleaning/appliance-cleaning.component';
import { AirconCleaningComponent } from './aircon-cleaning/aircon-cleaning.component';
import { RefrigeratorCleaningComponent } from './refrigerator-cleaning/refrigerator-cleaning.component';
import { ElectricfanCleaningComponent } from './electricfan-cleaning/electricfan-cleaning.component';
import { WashingmachineCleaningComponent } from './washingmachine-cleaning/washingmachine-cleaning.component';
import { TelevisionCleaningComponent } from './television-cleaning/television-cleaning.component';
import { ApplianceInstallComponent } from './appliance-install/appliance-install.component';
import { AirconInstallComponent } from './aircon-install/aircon-install.component';
import { RefrigeratorInstallComponent } from './refrigerator-install/refrigerator-install.component';
import { ElectricfanInstallComponent } from './electricfan-install/electricfan-install.component';
import { WashingmachineInstallComponent } from './washingmachine-install/washingmachine-install.component';
import { TelevisionInstallComponent } from './television-install/television-install.component';
import { BookingsummaryComponent } from './bookingsummary/bookingsummary.component';

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
  { path: 'aircon-repair', component: AircondetailsComponent },
  { path: 'refrigerator-repair', component: RefrigeratordetailsComponent },
  { path: 'electricfan-repair', component: ElectricfandetailsComponent },
  { path: 'washingmachine-repair', component: WashingmachinedetailsComponent },
  { path: 'television-repair', component: TelevisiondetailsComponent },
  { path: 'cleaning', component: ApplianceCleaningComponent },
  { path: 'aircon-cleaning', component: AirconCleaningComponent },
  { path: 'refrigerator-cleaning', component: RefrigeratorCleaningComponent },
  { path: 'electricfan-cleaning', component: ElectricfanCleaningComponent },
  { path: 'washingmachine-cleaning', component: WashingmachineCleaningComponent },
  { path: 'television-cleaning', component: TelevisionCleaningComponent },
  { path: 'installation', component: ApplianceInstallComponent },
  { path: 'aircon-installation', component: AirconInstallComponent },
  { path: 'refrigerator-installation', component: RefrigeratorInstallComponent },
  { path: 'electricfan-installation', component: ElectricfanInstallComponent },
  { path: 'washingmachine-installation', component: WashingmachineInstallComponent },
  { path: 'television-installation', component: TelevisionInstallComponent },
  { path: 'summary', component: BookingsummaryComponent },
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

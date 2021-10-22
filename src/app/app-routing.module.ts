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
import { AddtechComponent } from './addtech/addtech.component';
import { EditAddressComponent } from './edit-address/edit-address.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MenuAirconComponent } from './menu-aircon/menu-aircon.component';
import { MenuFanComponent } from './menu-fan/menu-fan.component';
import { MenuTvComponent } from './menu-tv/menu-tv.component';
import { MenuWashingComponent } from './menu-washing/menu-washing.component';
import { MenuRefComponent } from './menu-ref/menu-ref.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { PricingComponent } from './pricing/pricing.component';
import { PrivacytermsComponent } from './privacyterms/privacyterms.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RepairFeeComponent } from './repair-fee/repair-fee.component';
import { CleaningFeeComponent } from './cleaning-fee/cleaning-fee.component';
import { InstallFeeComponent } from './install-fee/install-fee.component';


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
  { path: 'add_technician', component: AddtechComponent },
  { path: 'edit_address', component: EditAddressComponent },
  { path: 'edit_profile', component: EditProfileComponent },
  { path: 'change_password', component: ChangePasswordComponent },
  { path: 'about_us', component: AboutUsComponent },
  { path: 'contact_us', component: ContactUsComponent },
  { path: 'menu_aircon', component: MenuAirconComponent },
  { path: 'menu_fan', component: MenuFanComponent },
  { path: 'menu_tv', component: MenuTvComponent },
  { path: 'menu_washing', component: MenuWashingComponent },
  { path: 'menu_ref', component: MenuRefComponent },
  { path: 'user', component: AdminUserComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'privacy_terms', component: PrivacytermsComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'repair-fee', component: RepairFeeComponent },
  { path: 'cleaning-fee', component: CleaningFeeComponent }
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

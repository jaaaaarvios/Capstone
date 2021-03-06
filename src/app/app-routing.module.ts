import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent} from '../app/homepage/homepage.component';
import { LoginformComponent } from '../app/loginform/loginform.component';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import {BookingformComponent} from '../app/bookingform/bookingform.component';
import {ProfileformComponent} from '../app/profileform/profileform.component';
import {RequestdetailsComponent} from '../app/requestdetails/requestdetails.component';
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
import { ApplianceInstallComponent } from './appliance-install/appliance-install.component';
import { AirconInstallComponent } from './aircon-install/aircon-install.component';
import { WashingmachineInstallComponent } from './washingmachine-install/washingmachine-install.component';
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
import { RescheduleComponent } from './reschedule/reschedule.component';
import { PaymentformComponent } from '../app/paymentform/paymentform.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { PaymentthankyouComponent } from './paymentthankyou/paymentthankyou.component';
import { RequestdetailsAdminComponent } from './requestdetails-admin/requestdetails-admin.component';
import { RequestCompleteComponent } from './request-complete/request-complete.component';
import { BookingsummaryEditComponent } from './bookingsummary-edit/bookingsummary-edit.component';
import { SignupformComponent } from './signupform/signupform.component';
import { LoginformAdminComponent } from './loginform-admin/loginform-admin.component';
import { RequestdetailsPendingComponent } from './requestdetails-pending/requestdetails-pending.component';
import { RequestdetailsCompleteComponent } from './requestdetails-complete/requestdetails-complete.component';
import { EditTechnicianComponent } from './edit-technician/edit-technician.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'loginform', component: LoginformComponent },
  { path: 'admin-login', component: LoginformAdminComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'bookingform', component: BookingformComponent },
  { path: 'profile', component: ProfileformComponent },
  { path: 'requestdetails/:id', component: RequestdetailsComponent },
  { path: 'requestdetails-pending/:id', component: RequestdetailsPendingComponent },
  { path: 'payment', component: PaymentformComponent },
  { path: 'employees', component: PaymentformComponent },
  { path: 'payment', component: PaymentformComponent },
  { path: 'admin', component: AdminpageComponent },
  { path: 'technicians', component: TechniciansComponent },
  { path: 'technician/:id', component: TechprofileComponent },
  { path: 'appliance', component: AppliancesComponent },
  { path: 'aircon-repair', component: AircondetailsComponent },
  { path: 'refrigerator-repair', component: RefrigeratordetailsComponent },
  { path: 'electricfan-repair', component: ElectricfandetailsComponent },
  { path: 'washingmachine-repair', component: WashingmachinedetailsComponent },
  { path: 'television-repair', component: TelevisiondetailsComponent },
  { path: 'cleaning', component: ApplianceCleaningComponent },
  { path: 'aircon-cleaning', component: AirconCleaningComponent },
  { path: 'installation', component: ApplianceInstallComponent },
  { path: 'aircon-installation', component: AirconInstallComponent },
  { path: 'washingmachine-installation', component: WashingmachineInstallComponent },
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
  { path: 'reschedule/:id', component: RescheduleComponent },
  { path: 'payment', component: PaymentformComponent },
  { path: 'paymentsuccess', component: PaymentsuccessComponent },
  { path: 'paymentthankyou', component: PaymentthankyouComponent },
  { path: 'requestdetail/:id', component: RequestdetailsAdminComponent },
  { path: 'completedetail/:id', component: RequestCompleteComponent },
  { path: 'summary-edit/:id', component: BookingsummaryEditComponent },
  { path: 'signup', component: SignupformComponent },
  { path: 'completed/:id', component: RequestdetailsCompleteComponent },
  { path: 'edit-technician/:id', component: EditTechnicianComponent },
  { path: 'termsandconditions', component: TermsandconditionsComponent },
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

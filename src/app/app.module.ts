import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
// -----------------Materials----------------------------
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
// --------------Components-----------------------------
import { HomepageComponent } from './homepage/homepage.component';
import { LoginformComponent } from './loginform/loginform.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookingformComponent } from './bookingform/bookingform.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { ProfileformComponent } from './profileform/profileform.component';
import { AircondetailsComponent } from './aircondetails/aircondetails.component';
import { RequestdetailsComponent } from './requestdetails/requestdetails.component';
import { RescheduleComponent } from './reschedule/reschedule.component';
import { ConfirmcancelComponent } from './confirmcancel/confirmcancel.component';
import { CancelreasonsComponent } from './cancelreasons/cancelreasons.component';
import { PaymentformComponent } from './paymentform/paymentform.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { RefrigeratordetailsComponent } from './refrigeratordetails/refrigeratordetails.component';
import { ElectricfandetailsComponent } from './electricfandetails/electricfandetails.component';
import { WashingmachinedetailsComponent } from './washingmachinedetails/washingmachinedetails.component';
import { TelevisiondetailsComponent } from './televisiondetails/televisiondetails.component';
import { TechniciansComponent } from './technicians/technicians.component';
import { TechprofileComponent } from './techprofile/techprofile.component';
import { SchedulepageComponent } from './schedulepage/schedulepage.component';
import { AddtechComponent } from './addtech/addtech.component';
import { BookingsummaryComponent } from './bookingsummary/bookingsummary.component';
import { ApplianceCleaningComponent } from './appliance-cleaning/appliance-cleaning.component';
import { AirconCleaningComponent } from './aircon-cleaning/aircon-cleaning.component';
import { ApplianceInstallComponent } from './appliance-install/appliance-install.component';
import { AirconInstallComponent } from './aircon-install/aircon-install.component';
import { WashingmachineInstallComponent } from './washingmachine-install/washingmachine-install.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { EditAddressComponent } from './edit-address/edit-address.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MenuFanComponent } from './menu-fan/menu-fan.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MenuAirconComponent } from './menu-aircon/menu-aircon.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MenuWashingComponent } from './menu-washing/menu-washing.component';
import { MenuRefComponent } from './menu-ref/menu-ref.component';
import { MenuTvComponent } from './menu-tv/menu-tv.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { PricingComponent } from './pricing/pricing.component';
import { PrivacytermsComponent } from './privacyterms/privacyterms.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { RepairFeeComponent } from './repair-fee/repair-fee.component';
import { CleaningFeeComponent } from './cleaning-fee/cleaning-fee.component';
import { InstallFeeComponent } from './install-fee/install-fee.component';
import { InstallFeeWashingComponent } from './install-fee-washing/install-fee-washing.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { PaymentthankyouComponent } from './paymentthankyou/paymentthankyou.component';
import { RequestdetailsAdminComponent } from './requestdetails-admin/requestdetails-admin.component';
import { RequestCompleteComponent } from './request-complete/request-complete.component';
import { BookingsummaryEditComponent } from './bookingsummary-edit/bookingsummary-edit.component';
import { SignupformComponent } from './signupform/signupform.component';
import { LoginformAdminComponent } from './loginform-admin/loginform-admin.component';
//payment
// import {AdyenCheckout} from '@adyen/adyen-web';
// import '@adyen/adyen-web/dist/adyen.css';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginformComponent,
    DashboardComponent,
    BookingformComponent,
    AppliancesComponent,
    ProfileformComponent,
    AircondetailsComponent,
    RequestdetailsComponent,
    RescheduleComponent,
    ConfirmcancelComponent,
    CancelreasonsComponent,
    PaymentformComponent,
    AdminpageComponent,
    RefrigeratordetailsComponent,
    ElectricfandetailsComponent,
    WashingmachinedetailsComponent,
    TelevisiondetailsComponent,
    TechniciansComponent,
    TechprofileComponent,
    SchedulepageComponent,
    AddtechComponent,
    BookingsummaryComponent,
    ApplianceCleaningComponent,
    AirconCleaningComponent,
    ApplianceInstallComponent,
    AirconInstallComponent,
    WashingmachineInstallComponent,
    StarRatingComponent,
    EditAddressComponent,
    EditProfileComponent,
    ChangePasswordComponent,
    MenuFanComponent,
    AboutUsComponent,
    MenuAirconComponent,
    ContactUsComponent,
    MenuWashingComponent,
    MenuRefComponent,
    MenuTvComponent,
    AdminUserComponent,
    PricingComponent,

    PrivacytermsComponent,
    FeedbackComponent,
    RepairFeeComponent,
    CleaningFeeComponent,
    InstallFeeComponent,
    InstallFeeWashingComponent,
    PaymentsuccessComponent,
    PaymentthankyouComponent,
    RequestdetailsAdminComponent,
    RequestCompleteComponent,
    BookingsummaryEditComponent,
    SignupformComponent,
    LoginformAdminComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    HttpClientModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatIconModule,
    MatTabsModule,
    MatSidenavModule,
    MatStepperModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDialogModule,
    MatTableModule,
    MatToolbarModule,
    MatTableModule,
    MatListModule,
    MatGridListModule,
    NgbModule,
    NgxStarRatingModule

  ],
  providers: [],

  bootstrap: [AppComponent]

})
export class AppModule { }
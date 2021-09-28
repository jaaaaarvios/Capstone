import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
// -----------------Materials----------------------------
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
// --------------Components-----------------------------
import { HomepageComponent } from './homepage/homepage.component';
import {LoginformComponent} from './loginform/loginform.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookingformComponent } from './bookingform/bookingform.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { ProfileformComponent } from './profileform/profileform.component';
import { ElectricalComponent } from './electrical/electrical.component';
import { AircondetailsComponent } from './aircondetails/aircondetails.component';
import { ServicedetailsComponent } from './servicedetails/servicedetails.component';
import { RequestdetailsComponent } from './requestdetails/requestdetails.component';
import { RescheduleComponent } from './reschedule/reschedule.component';
import { ConfirmcancelComponent } from './confirmcancel/confirmcancel.component';
import { CancelreasonsComponent } from './cancelreasons/cancelreasons.component';
import { PaymentformComponent } from './paymentform/paymentform.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { EmployeesComponent } from './employees/employees.component';
import { RefrigeratordetailsComponent } from './refrigeratordetails/refrigeratordetails.component';
import { ElectricfandetailsComponent } from './electricfandetails/electricfandetails.component';
import { WashingmachinedetailsComponent } from './washingmachinedetails/washingmachinedetails.component';
import { HousecleaningComponent } from './housecleaning/housecleaning.component';
import { GencleaningdetailsComponent } from './gencleaningdetails/gencleaningdetails.component';
import { TelevisiondetailsComponent } from './televisiondetails/televisiondetails.component';
import { TechniciansComponent } from './technicians/technicians.component';
import { TechprofileComponent } from './techprofile/techprofile.component';
import { SchedulepageComponent } from './schedulepage/schedulepage.component';
import { AddtechComponent } from './addtech/addtech.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginformComponent,
    DashboardComponent,
    BookingformComponent,
    AppliancesComponent,
    ProfileformComponent,
    ElectricalComponent,
    AircondetailsComponent,
    ServicedetailsComponent,
    RequestdetailsComponent,
    RescheduleComponent,
    ConfirmcancelComponent,
    CancelreasonsComponent,
    PaymentformComponent,
    AdminpageComponent,
    EmployeesComponent,
    RefrigeratordetailsComponent,
    ElectricfandetailsComponent,
    WashingmachinedetailsComponent,
    HousecleaningComponent,
    GencleaningdetailsComponent,
    TelevisiondetailsComponent,
    TechniciansComponent,
    TechprofileComponent,
    SchedulepageComponent,
    AddtechComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

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
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {LoginformComponent} from './loginform/loginform.component';
import { AppRoutingModule } from './app-routing.module';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BookingformComponent } from './bookingform/bookingform.component';
import {MatStepperModule} from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AppliancesComponent } from './appliances/appliances.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ProfileformComponent } from './profileform/profileform.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import { ElectricalComponent } from './electrical/electrical.component';
import { AircondetailsComponent } from './aircondetails/aircondetails.component';
import { ServicedetailsComponent } from './servicedetails/servicedetails.component';
import {MatTableModule} from '@angular/material/table';
import { RequestdetailsComponent } from './requestdetails/requestdetails.component';
import { RescheduleComponent } from './reschedule/reschedule.component';
import { ConfirmcancelComponent } from './confirmcancel/confirmcancel.component';
import { CancelreasonsComponent } from './cancelreasons/cancelreasons.component';
import { PaymentformComponent } from './paymentform/paymentform.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
<<<<<<< HEAD
import { EmployeesComponent } from './employees/employees.component';
import {MatToolbarModule} from '@angular/material/toolbar';
=======
import { RefrigeratordetailsComponent } from './refrigeratordetails/refrigeratordetails.component';
import { ElectricfandetailsComponent } from './electricfandetails/electricfandetails.component';
import { WashingmachinedetailsComponent } from './washingmachinedetails/washingmachinedetails.component';
import { HousecleaningComponent } from './housecleaning/housecleaning.component';

>>>>>>> 58599e0ef378498dfd8e1f7350b292cff5ef41d9

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
<<<<<<< HEAD
    EmployeesComponent
=======
    RefrigeratordetailsComponent,
    ElectricfandetailsComponent,
    WashingmachinedetailsComponent,
    HousecleaningComponent,
>>>>>>> 58599e0ef378498dfd8e1f7350b292cff5ef41d9
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatBadgeModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatMenuModule,
    AppRoutingModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatTabsModule,
    MatSidenavModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDialogModule,
<<<<<<< HEAD
    MatTableModule,
    MatToolbarModule
=======
    MatTableModule
    
>>>>>>> 58599e0ef378498dfd8e1f7350b292cff5ef41d9
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

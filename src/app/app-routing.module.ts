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
<<<<<<< HEAD
import {EmployeesComponent} from '../app/employees/employees.component';
import {AdminpageComponent} from '../app/adminpage/adminpage.component';
=======
>>>>>>> 58599e0ef378498dfd8e1f7350b292cff5ef41d9


const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'loginform', component: LoginformComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'bookingform', component: BookingformComponent },
  { path: 'servicedetails', component: ServicedetailsComponent },
  { path: 'profileform', component: ProfileformComponent },
  { path: 'confirmcancel', component: ConfirmcancelComponent },
  { path: 'requestdetails', component: RequestdetailsComponent },
<<<<<<< HEAD
  { path: 'paymentform', component: PaymentformComponent },
  { path: 'adminpage', component: RequestdetailsComponent },
  { path: 'employees', component: PaymentformComponent }
=======
  { path: 'paymentform', component: PaymentformComponent }

>>>>>>> 58599e0ef378498dfd8e1f7350b292cff5ef41d9
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

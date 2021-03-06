import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymentsuccess',
  templateUrl: './paymentsuccess.component.html',
  styleUrls: ['./paymentsuccess.component.css']
})
export class PaymentsuccessComponent implements OnInit {

  token = JSON.parse(localStorage.getItem('token'));
  service = JSON.parse(localStorage.getItem('service'));

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("service") == null) {
      this.router.navigate(['/dashboard'])
    }
  }
  onSubmit(){
    localStorage.removeItem("service");
    this.router.navigate(['dashboard']);
    localStorage.setItem('firstLogin', "true");
  }
  getConfirmation1() {
      localStorage.removeItem("service");
      this.router.navigate(['/menu_aircon']);
      
  }
  getConfirmation2() {
      localStorage.removeItem("service");
      this.router.navigate(['/menu_ref'])
  }
  getConfirmation3() {
      localStorage.removeItem("service");
      this.router.navigate(['/menu_fan'])
  }
  getConfirmation4() {
      localStorage.removeItem("service");
      this.router.navigate(['/menu_washing'])
  }
  getConfirmation5() {
      localStorage.removeItem("service");
      this.router.navigate(['/menu_tv'])
  }
  getConfirmation6() {
      localStorage.removeItem("service");
      this.router.navigate(['/pricing'])
  }
  getConfirmation7() {
      localStorage.removeItem("service");
      this.router.navigate(['/contact_us'])
  }
  getConfirmation8() {
      localStorage.removeItem("service");
      this.router.navigate(['/about_us'])
  }

}

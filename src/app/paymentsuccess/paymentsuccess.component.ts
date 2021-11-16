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
    this.router.navigate(['/dashboard']);
  }

}

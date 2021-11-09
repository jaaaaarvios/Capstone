import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MyErrorStateMatcher } from '../app.component';
import { render } from 'creditcardpayments/creditCardPayments';


@Component({
  selector: 'app-paymentform',
  templateUrl: './paymentform.component.html',
  styleUrls: ['./paymentform.component.css']
})
export class PaymentformComponent implements OnInit {

  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));


  service_request = []
  token = JSON.parse(localStorage.getItem('token'));


  constructor(private router: Router, private breakpointObserver: BreakpointObserver,
    private http: HttpClient) {

    render({
      id: "#myPaypalButtons",
      currency: "PHP",
      value: "200.00",
      onApprove: (details) => {
        alert("Transaction success")
        this.router.navigate(['/paymentsuccess'])
      }
    })
  }



  ngOnInit(): void {

    const httpOptions = {
      headers: new HttpHeaders({
        "x-access-token": this.token
      })
    }
    let data: Observable<any>;
    data = this.http.get('http://localhost:3000/NewServiceRequest', httpOptions);
    data.subscribe(result => {
      this.service_request = result
      console.log(this.service_request)
    });

    if (localStorage.getItem("id") == null) {
      this.router.navigate(['/home'])
    }
  }

  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }
}

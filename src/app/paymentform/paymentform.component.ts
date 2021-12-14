import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MyErrorStateMatcher } from '../app.component';
import { render } from 'creditcardpayments/creditCardPayments';
import { AuthService } from '../auth.service';


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

  service_request = [];
  data: any;
  token = JSON.parse(localStorage.getItem('token'));
  service = JSON.parse(localStorage.getItem('service'));
  total = this.service.checkupfee + this.service.installfee + this.service.unitfee + this.service.cleaningfee;

  constructor(private router: Router, private breakpointObserver: BreakpointObserver,
    private http: HttpClient, private auth: AuthService) {

    render({
      id: "#myPaypalButtons",
      currency: "PHP",
      value: "200.00",
      onApprove: (details) => {
        alert("Transaction success")
        this.router.navigate(['/paymentsuccess'])
        console.log(details)
      }
    })
  }

  ngOnInit(): void {
    if (localStorage.getItem("service") == null) {
      this.router.navigate(['/dashboard'])
    }
    if (localStorage.getItem('firstLogin') == 'true') {
      localStorage.setItem('firstLogin', "false")
      window.location.reload()
    }
  }

  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }

  deleteOne() {
    const httpOptions = {
      headers: new HttpHeaders({
        "x-access-token": this.token
      })
    }
    this.auth.deleteRequest(this.service._id, httpOptions).subscribe(data => {
      this.data = data
    })
  }

  getConfirmation() {
    var retVal = confirm("If you exit, your booking progress will be lost.");
    if (retVal == true) {
      this.deleteOne()
      localStorage.removeItem("service");
      this.router.navigate(['dashboard']);
      return true;
    } else {
      return false;
    }
  }

  getConfirmation1() {
    var retVal = confirm("If you exit, your booking progress will be lost.");
    if (retVal == true) {
      this.deleteOne()
      localStorage.removeItem("service");
      this.router.navigate(['/menu_aircon'])
      return true;
    } else {
      return false;
    }
  }
  getConfirmation2() {
    var retVal = confirm("If you exit, your booking progress will be lost.");
    if (retVal == true) {
      this.deleteOne()
      localStorage.removeItem("service");
      this.router.navigate(['/menu_ref'])
      return true;
    } else {
      return false;
    }
  }
  getConfirmation3() {
    var retVal = confirm("If you exit, your booking progress will be lost.");
    if (retVal == true) {
      this.deleteOne()
      localStorage.removeItem("service");
      this.router.navigate(['/menu_fan'])
      return true;
    } else {
      return false;
    }
  }
  getConfirmation4() {
    var retVal = confirm("If you exit, your booking progress will be lost.");
    if (retVal == true) {
      this.deleteOne()
      localStorage.removeItem("service");
      this.router.navigate(['/menu_washing'])
      return true;
    } else {
      return false;
    }
  }
  getConfirmation5() {
    var retVal = confirm("If you exit, your booking progress will be lost.");
    if (retVal == true) {
      this.deleteOne()
      localStorage.removeItem("service");
      this.router.navigate(['/menu_tv'])
      return true;
    } else {
      return false;
    }
  }
  getConfirmation6() {
    var retVal = confirm("If you exit, your booking progress will be lost.");
    if (retVal == true) {
      this.deleteOne()
      localStorage.removeItem("service");
      this.router.navigate(['/pricing'])
      return true;
    } else {
      return false;
    }
  }
  getConfirmation7() {
    var retVal = confirm("If you exit, your booking progress will be lost.");
    if (retVal == true) {
      this.deleteOne()
      localStorage.removeItem("service");
      this.router.navigate(['/contact_us'])
      return true;
    } else {
      return false;
    }
  }
  getConfirmation8() {
    var retVal = confirm("If you exit, your booking progress will be lost.");
    if (retVal == true) {
      this.deleteOne()
      localStorage.removeItem("service");
      this.router.navigate(['/about_us'])
      return true;
    } else {
      return false;
    }
  }
  paycashSubmit(){
    var retVal = confirm("Are you sure ?");
    if (retVal == true) {
      this.router.navigate(['/paymentthankyou'])
      return true;
    } else {
      return false;
    }
  }
}

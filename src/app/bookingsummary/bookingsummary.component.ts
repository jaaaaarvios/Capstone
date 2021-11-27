import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-bookingsummary',
  templateUrl: './bookingsummary.component.html',
  styleUrls: ['./bookingsummary.component.css']
})

export class BookingsummaryComponent implements OnInit {
  subscription: any;
  data: any;
  token = JSON.parse(localStorage.getItem('token'));
  service = JSON.parse(localStorage.getItem('service'));
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  total = this.service.checkupfee + this.service.installfee + this.service.unitfee + this.service.cleaningfee;
  
  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));

  constructor(public dialog: MatDialog, private breakpointObserver: BreakpointObserver,
    private http: HttpClient, private router: Router,  private route: ActivatedRoute, private auth: AuthService) {
  }

  ngOnInit(): void {
    if (localStorage.getItem("service") == null) {
      this.router.navigate(['/dashboard'])
    }
  }

  deleteOne() {
    this.auth.deleteRequest(this.service._id).subscribe(data => {
      this.data = data
    })
  }

  cancelRequest() {
    this.router.navigate(['/booking']);
  }
  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }
  goPayment(){
    this.router.navigate(['payment'])
    localStorage.setItem('firstLogin', "true")
  }
  getConfirmation() {
    var retVal = confirm("By cancelling your booking, all data will be lost. ");
    if (retVal == true) {
      this.deleteOne()
      this.router.navigate(['dashboard'])
      localStorage.setItem('firstLogin', "true")
      return true;
    } else {
      return false;
    }
  }
  getConfirmationn() {
    var retVal = confirm("If you exit, your booking progress will be lost.");
    if (retVal == true) {
      this.deleteOne()
      localStorage.removeItem("service");
      this.router.navigate(['/dashboard'])
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
}

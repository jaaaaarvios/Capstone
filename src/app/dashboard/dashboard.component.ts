import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RequestdetailsComponent } from '../requestdetails/requestdetails.component';
import { SharedService } from '../shared/shared.service';
import { HttpClient } from '@angular/common/http';
// import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  fname = JSON.parse(localStorage.getItem('first_name'));
  lname = JSON.parse(localStorage.getItem('last_name'));
  date: Date;
  subscription: any;
  pending_request = []
  completed_request = []
  cancelled_request = []
  approved_request = []
  rejected_request = []

  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));

  constructor(private router: Router, public dialog: MatDialog, private http: HttpClient,
    private breakpointObserver: BreakpointObserver, private shared: SharedService) {
    {
      setInterval(() => {
        this.date = new Date()
      }, 1000)
    }
  }

  ngOnInit(): void {

    let data: Observable<any>;
    data = this.http.get('http://localhost:3000/NewServiceRequest');
    data.subscribe(result => {
      let completed_request = result.filter(function (status) {
        return status.status == "Completed";
      });
      this.completed_request = completed_request

      let pending_request = result.filter(function (status) {
        return status.status == "Pending";
      });
      this.pending_request = pending_request

      let approved_request = result.filter(function (status) {
        return status.status == "Pending (Approved)";
      });
      this.approved_request = approved_request

      let cancel_request = result.filter(function (status) {
        return status.status == "Cancelled";
      });
      this.cancelled_request = cancel_request

      let rejected_request = result.filter(function (status) {
        return status.status == "Rejected";
      });
      this.rejected_request = rejected_request

    });

    if (localStorage.getItem("first_name") == null || localStorage.getItem("last_name") == null) {
      this.router.navigate(['/home'])
    }
  }

  images = [];

  signOut() {
    var auth2 = auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
      this.router.navigate(['/home'])
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/home'])
  }


  openDialog() {
    const dialogRef = this.dialog.open(RequestdetailsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }
}


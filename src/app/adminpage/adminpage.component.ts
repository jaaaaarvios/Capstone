import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  date: Date;
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

  cols$: Observable<number> = this.breakpointObserver
  .observe([Breakpoints.Small, Breakpoints.XSmall])
  .pipe(
    map((result) => {
      if (result.breakpoints[Breakpoints.XSmall]) {
        return 1;
      } else if (result.breakpoints[Breakpoints.Small]) {
        return 2;
      } else {
        return 3;
      }
    }),
  );
  id: string;

  constructor( private breakpointObserver: BreakpointObserver, private http: HttpClient, private router: Router) { 
    setInterval(() => {
      this.date = new Date()
    }, 1000)
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
  }

  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }

  approvedRequest(){
    var retVal = confirm("Do you really want to approve the request ?");
    if (retVal == true) {
      let body = {
        "status": "Pending (Approved)",
      }
      this.http.patch("http://localhost:3000/NewServiceRequest/status/" + this.id, body)
        .subscribe(data => {
          this.router.navigate(['/dashboard']);
        }, error => {
          console.log(error);
          alert(error);
        });
    }

  }
  rejectRequest(){

  }

}

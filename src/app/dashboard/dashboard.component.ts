import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MyErrorStateMatcher } from '../app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [NgbModalConfig, NgbModal]
})


export class DashboardComponent implements OnInit {

  id = JSON.parse(localStorage.getItem('id'));
  token = JSON.parse(localStorage.getItem('token'));
  service = JSON.parse(localStorage.getItem('service_request'));
  fname = "";
  lname = "";
  number = "";
  email: any;
  address = "";
  date: Date;
  subscription: any;
  pending_request = [];
  completed_request = [];
  cancelled_request = [];
  approved_request = [];
  rejected_request = [];
  service_request: [];
  isReload = false;

  matcher = new MyErrorStateMatcher();
  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));


  constructor(private router: Router, public dialog: MatDialog, private http: HttpClient, config: NgbModalConfig,
     private modalService: NgbModal, private breakpointObserver: BreakpointObserver) {
    {
      setInterval(() => {
        this.date = new Date()
        if (localStorage.getItem('firstLogin') == 'true') {
          localStorage.setItem('firstLogin', "false")
        window.location.reload()
      }
      }, 1000)
    }
    config.backdrop = 'static';
    config.keyboard = false;
  }

  getItems() {
    const httpOptions = {
      headers: new HttpHeaders({
        "x-access-token": this.token
      })
    }

    let data: Observable<any>;
    data = this.http.get('https://dhdev-ayosgamit.herokuapp.com/NewServiceRequest', httpOptions);
    data.subscribe(result => {
      var email = this.email
      let service_request = result.filter(function (createdBy) {
        return createdBy.createdBy == email;
      });
      this.service_request = service_request
      localStorage.setItem("service_request", JSON.stringify(this.service_request));
    });

    let pending_request = this.service.filter(function (status) {
      return status.status == "Pending";
    });
    this.pending_request = pending_request

    let completed_request = this.service.filter(function (status) {
      return status.status == "Completed";
    });
    this.completed_request = completed_request

    let approved_request = this.service.filter(function (status) {
      return status.status == "Pending (Approved)";
    });
    this.approved_request = approved_request

    let cancel_request = this.service.filter(function (status) {
      return status.status == "Cancelled";
    });
    this.cancelled_request = cancel_request

    let rejected_request = this.service.filter(function (status) {
      return status.status == "Rejected";
    });
    this.rejected_request = rejected_request

    if (localStorage.getItem("id") == null) {
      this.router.navigate(['/home'])
    }
  }

  ngOnInit(): void {
    
    const httpOptions = {
      headers: new HttpHeaders({
        "x-access-token": this.token
      })
    }

    let dataa: Observable<any>;
    dataa = this.http.get('https://dhdev-ayosgamit.herokuapp.com/CredentialDB/' + this.id, httpOptions);
    dataa.subscribe(result => {
      this.fname = result.first_name;
      this.lname = result.last_name;
      this.email = result.email;
      this.number = result.number;
      this.address = result.service_address
    });

    let data: Observable<any>;
    data = this.http.get('https://dhdev-ayosgamit.herokuapp.com/NewServiceRequest', httpOptions);
    data.subscribe(result => {
      var email = this.email
      let service_request = result.filter(function (createdBy) {
        return createdBy.createdBy == email;
      });
      this.service_request = service_request
      localStorage.setItem("service_request", JSON.stringify(this.service_request));
    });

    let pending_request = this.service.filter(function (status) {
      return status.status == "Pending";
    });
    this.pending_request = pending_request

    let completed_request = this.service.filter(function (status) {
      return status.status == "Completed";
    });
    this.completed_request = completed_request

    let approved_request = this.service.filter(function (status) {
      return status.status == "Pending (Approved)";
    });
    this.approved_request = approved_request

    let cancel_request = this.service.filter(function (status) {
      return status.status == "Cancelled";
    });
    this.cancelled_request = cancel_request

    let rejected_request = this.service.filter(function (status) {
      return status.status == "Rejected";
    });
    this.rejected_request = rejected_request

    if (localStorage.getItem("id") == null) {
      this.router.navigate(['/home'])
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/home'])
  }

  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }
}



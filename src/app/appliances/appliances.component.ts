import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from '../shared/shared.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RepairFeeComponent } from '../repair-fee/repair-fee.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-appliances',
  templateUrl: './appliances.component.html',
  styleUrls: ['./appliances.component.css']
})
export class AppliancesComponent implements OnInit {

  subscription: any;
  fname: any;
  id = JSON.parse(localStorage.getItem('id'));
  token = JSON.parse(localStorage.getItem('token'));

  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));

  constructor(private shared: SharedService, private router: Router, private auth: AuthService,
    private breakpointObserver: BreakpointObserver, private http: HttpClient, public dialog: MatDialog) { }

  ngOnInit() {
    if (localStorage.getItem("id") == null) {
      this.router.navigate(['/home'])
    }
    const httpOptions = {
      headers: new HttpHeaders({
        "x-access-token": this.token
      })
    }
    let data: Observable<any>;
    data = this.http.get('https://dhdev-ayosgamit.herokuapp.com/CredentialDB/' + this.id, httpOptions);
    data.subscribe(result => {
      this.fname = result.first_name;
    });
  }
  goDashboard(){
    this.router.navigate(['dashboard']);
    localStorage.setItem('firstLogin', "true");
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/home'])
  }

  AirconOpen() {
    this.router.navigate(['/aircon-repair']);
  }
  RefrigeratorOpen() {
    this.router.navigate(['/refrigerator-repair']);
  }
  ElectricfanOpen() {
    this.router.navigate(['/electricfan-repair']);
  }
  WashingmachineOpen() {
    this.router.navigate(['/washingmachine-repair']);
  }
  TelevisionOpen() {
    this.router.navigate(['/television-repair']);
  }

  signOut() {
    this.router.navigate(['/home'])
  }

  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }
}


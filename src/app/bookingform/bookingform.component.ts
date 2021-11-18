import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { SharedService } from '../shared/shared.service';

declare const L: any;

@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.css']
})
export class BookingformComponent implements OnInit {

  subscription: any;
  token = JSON.parse(localStorage.getItem('token'));

  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));
 

  constructor(private router: Router, public dialog: MatDialog, private auth: AuthService,
    private breakpointObserver: BreakpointObserver, private shared: SharedService) { }

  ApplianceOpen(){
    this.router.navigate(['/appliance'])
  }
  CleaningOpen(){
    this.router.navigate(['/cleaning'])
  }
  InstallationOpen(){
    this.router.navigate(['/installation'])
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/home'])
  }

  ngOnInit() {
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







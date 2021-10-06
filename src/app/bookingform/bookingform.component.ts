import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SharedService } from '../shared/shared.service';

declare const L: any;

@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.css']
})
export class BookingformComponent implements OnInit {

  subscription: any;
  service_type ="";
  repair = "Repair";
  cleaning = "Cleaning";
  install = "Installation"

  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));
 

  constructor(private router: Router, public dialog: MatDialog, 
    private breakpointObserver: BreakpointObserver, private shared: SharedService) { }

  ApplianceOpen(){
    this.shared.changeServiceType(this.repair);
    this.router.navigate(['/appliance'])
  }
  CleaningOpen(){
    this.shared.changeServiceType(this.cleaning);
    this.router.navigate(['/cleaning'])
  }
  InstallationOpen(){
    this.shared.changeServiceType(this.install);
    this.router.navigate(['/installation'])
  }

  signOut() {
    this.router.navigate(['/home'])
  }

  ngOnInit() {
    this.subscription = this.shared.currentServiceType.subscribe(service_type => this.service_type = service_type);
  }

  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }
}







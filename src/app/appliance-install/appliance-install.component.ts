import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from '../shared/shared.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-appliance-install',
  templateUrl: './appliance-install.component.html',
  styleUrls: ['./appliance-install.component.css']
})
export class ApplianceInstallComponent implements OnInit {

  subscription: any;
  service_appliance="";
  ac = "Aircon";
  ref = "Refrigerator";
  efan = "Electric Fan";
  wm = "Washing Machine";
  tv = "Television";
  
  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));

  constructor(private shared: SharedService, private router: Router, private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.subscription = this.shared.currentAppliance.subscribe(service_appliance => this.service_appliance = service_appliance);
  }

  AirconOpen(){
    this.shared.changeAppliance(this.ac);
    this.router.navigate(['/aircon-installation']);
  }
  RefrigeratorOpen(){
    this.shared.changeAppliance(this.ref);
    this.router.navigate(['/refrigerator-installation']);
  }
  ElectricfanOpen(){
    this.shared.changeAppliance(this.efan);
    this.router.navigate(['/electricfan-installation']);
  }
  WashingmachineOpen(){
    this.shared.changeAppliance(this.wm);
    this.router.navigate(['/washingmachine-installation']);
  }
  TelevisionOpen(){
    this.shared.changeAppliance(this.tv);
    this.router.navigate(['/television-installation']);
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

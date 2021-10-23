import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from '../shared/shared.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-appliance-cleaning',
  templateUrl: './appliance-cleaning.component.html',
  styleUrls: ['./appliance-cleaning.component.css']
})
export class ApplianceCleaningComponent implements OnInit {

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
    if(localStorage.getItem("first_name") == null ||localStorage.getItem("last_name") == null ){
      this.router.navigate(['/home'])
    }
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/home'])
  }
  AirconOpen(){
    this.shared.changeAppliance(this.ac);
    this.router.navigate(['/aircon-cleaning']);
  }
  RefrigeratorOpen(){
    this.shared.changeAppliance(this.ref);
    this.router.navigate(['/refrigerator-cleaning']);
  }
  ElectricfanOpen(){
    this.shared.changeAppliance(this.efan);
    this.router.navigate(['/electricfan-cleaning']);
  }
  WashingmachineOpen(){
    this.shared.changeAppliance(this.wm);
    this.router.navigate(['/washingmachine-cleaning']);
  }
  TelevisionOpen(){
    this.shared.changeAppliance(this.tv);
    this.router.navigate(['/television-cleaning']);
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

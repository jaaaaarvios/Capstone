import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from '../shared/shared.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { RepairFeeComponent } from '../repair-fee/repair-fee.component';

@Component({
  selector: 'app-appliances',
  templateUrl: './appliances.component.html',
  styleUrls: ['./appliances.component.css']
})
export class AppliancesComponent implements OnInit {

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

  constructor(private shared: SharedService, private router: Router, 
    private breakpointObserver: BreakpointObserver, private http: HttpClient, public dialog: MatDialog) { }

  

  ngOnInit() {
    this.subscription = this.shared.currentAppliance.subscribe(service_appliance => this.service_appliance = service_appliance);
    if (localStorage.getItem("id") == null) {
      this.router.navigate(['/home'])
    }
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/home'])
  }
  


  AirconOpen(){
    this.shared.changeAppliance(this.ac);
    this.router.navigate(['/aircon-repair']);
  }
  RefrigeratorOpen(){
    this.shared.changeAppliance(this.ref);
    this.router.navigate(['/refrigerator-repair']);
  }
  ElectricfanOpen(){
    this.shared.changeAppliance(this.efan);
    this.router.navigate(['/electricfan-repair']);
  }
  WashingmachineOpen(){
    this.shared.changeAppliance(this.wm);
    this.router.navigate(['/washingmachine-repair']);
  }
  TelevisionOpen(){
    this.shared.changeAppliance(this.tv);
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
function DialogContentExampleDialog(DialogContentExampleDialog: any) {
  throw new Error('Function not implemented.');
}


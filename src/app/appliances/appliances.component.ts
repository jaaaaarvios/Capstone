import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from '../shared/shared.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-appliances',
  templateUrl: './appliances.component.html',
  styleUrls: ['./appliances.component.css']
})
export class AppliancesComponent implements OnInit {

  subscription: any;
  service_type="";
  
  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));

  constructor(private shared: SharedService, private router: Router, private breakpointObserver: BreakpointObserver) { }

  // RefrigeratorOpenDialog() {
  //   const dialogRef = this.dialog.open(RefrigeratordetailsComponent);
    
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
  // ElectricfanOpenDialog() {
  //   const dialogRef = this.dialog.open(ElectricfandetailsComponent);
    
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
  // WashingmachineOpenDialog() {
  //   const dialogRef = this.dialog.open(WashingmachinedetailsComponent);
    
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  // TelevisionOpenDialog() {
  //   const dialogRef = this.dialog.open(TelevisiondetailsComponent);
    
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  ngOnInit() {
    this.subscription = this.shared.currentServiceType.subscribe(service_type => this.service_type = service_type);
  }

  AirconOpen(){
    this.router.navigate(['/aircon-repair']);
  }
  RefrigeratorOpen(){
    this.router.navigate(['/refrigerator-repair']);
  }
  ElectricfanOpen(){
    this.router.navigate(['/electricfan-repair']);
  }
  WashingmachineOpen(){
    this.router.navigate(['/washingmachine-repair']);
  }
  TelevisionOpen(){
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

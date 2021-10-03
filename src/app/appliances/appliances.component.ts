import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {AircondetailsComponent} from '../../app/aircondetails/aircondetails.component';
import {RefrigeratordetailsComponent} from '../../app/refrigeratordetails/refrigeratordetails.component';
import {ElectricfandetailsComponent} from '../../app/electricfandetails/electricfandetails.component';
import {WashingmachinedetailsComponent} from '../../app/washingmachinedetails/washingmachinedetails.component';
import { TelevisiondetailsComponent } from '../televisiondetails/televisiondetails.component';
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

  enteredValue ="";
  service_appliance = "";
  subscription: any;
  
  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));

  constructor(public dialog: MatDialog, private shared: SharedService, private router: Router, private breakpointObserver: BreakpointObserver) { }

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
  }

  AirconOpen(){
    this.router.navigate(['/aircon']);
    console.log(this.service_appliance);
  }
  RefrigeratorOpen(){
    this.router.navigate(['/refrigerator']);
    console.log(this.service_appliance);
  }
  ElectricfanOpen(){
    this.router.navigate(['/electricfan']);
    console.log(this.service_appliance);
  }
  WashingmachineOpen(){
    this.router.navigate(['/washingmachine']);
    console.log(this.service_appliance);
  }
  TelevisionOpen(){
    this.router.navigate(['/television']);
    console.log(this.service_appliance);
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

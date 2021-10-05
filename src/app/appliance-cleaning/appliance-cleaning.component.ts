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
  
  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));

  constructor(private shared: SharedService, private router: Router, private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }

  AirconOpen(){
    this.router.navigate(['/aircon-cleaning']);
  }
  RefrigeratorOpen(){
    this.router.navigate(['/refrigerator-cleaning']);
  }
  ElectricfanOpen(){
    this.router.navigate(['/electricfan-cleaning']);
  }
  WashingmachineOpen(){
    this.router.navigate(['/washingmachine-cleaning']);
  }
  TelevisionOpen(){
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

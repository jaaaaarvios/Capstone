import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from '../shared/shared.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-appliance-install',
  templateUrl: './appliance-install.component.html',
  styleUrls: ['./appliance-install.component.css']
})
export class ApplianceInstallComponent implements OnInit {

  subscription: any;
  token = JSON.parse(localStorage.getItem('token'));

  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));

  constructor(private shared: SharedService, private router: Router, private breakpointObserver: BreakpointObserver
    ,private auth: AuthService) { }

  ngOnInit(): void {
    if (localStorage.getItem("id") == null) {
      this.router.navigate(['/home'])
    }
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/home'])
  }

  AirconOpen(){
    this.router.navigate(['/aircon-installation']);
  }
  RefrigeratorOpen(){
    this.router.navigate(['/refrigerator-installation']);
  }
  ElectricfanOpen(){
    this.router.navigate(['/electricfan-installation']);
  }
  WashingmachineOpen(){
    this.router.navigate(['/washingmachine-installation']);
  }
  TelevisionOpen(){
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

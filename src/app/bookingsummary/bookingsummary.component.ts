import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-bookingsummary',
  templateUrl: './bookingsummary.component.html',
  styleUrls: ['./bookingsummary.component.css']
})

export class BookingsummaryComponent implements OnInit {
  subscription: any;

  service_request = []

  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));
  
  constructor(public dialog: MatDialog, private breakpointObserver: BreakpointObserver,
    private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    let data:Observable<any>;
      data = this.http.get('http://localhost:3000/NewServiceRequest');
      data.subscribe(result => {
        this.service_request = result
        console.log(this.service_request)
      });
  }

  cancelRequest(){
    this.router.navigate(['/booking']);
  }
  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }

}

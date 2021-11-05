import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SharedService } from '../shared/shared.service';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-bookingsummary',
  templateUrl: './bookingsummary.component.html',
  styleUrls: ['./bookingsummary.component.css']
})

export class BookingsummaryComponent implements OnInit {
  subscription: any;
  service_request = []
  id: any;

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));

  constructor(public dialog: MatDialog, private breakpointObserver: BreakpointObserver,
    private http: HttpClient, private router: Router) {

  }

  ngOnInit(): void {
    let data: Observable<any>;
    data = this.http.get('http://localhost:3000/NewServiceRequest');
    data.subscribe(result => {
      this.service_request = result
      console.log(this.service_request)
    });

    if (localStorage.getItem("first_name") == null || localStorage.getItem("last_name") == null) {
      this.router.navigate(['/home'])
    }

  }

  // deleteOne() {
  //   this.auth.deleteOne(this.id).subscribe(data => {
  //     this.data = data
  //   })
  // }

  cancelRequest() {
    this.router.navigate(['/booking']);
  }
  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }
  getConfirmation() {
    var retVal = confirm("Do you really want to cancel ?");
    if (retVal == true) {
      // this.deleteOne()
      this.router.navigate(['/dashboard'])
      return true;
    } else {
      return false;
    }
  }

}

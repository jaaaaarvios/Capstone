import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SharedService } from '../shared/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { RescheduleComponent } from '../reschedule/reschedule.component';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-requestdetails',
  templateUrl: './requestdetails.component.html',
  styleUrls: ['./requestdetails.component.css']
})
export class RequestdetailsComponent implements OnInit {

  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  id: any;
  data: any;

  constructor(public dialog: MatDialog, private breakpointObserver: BreakpointObserver, private router: Router
    , private http: HttpClient, private route: ActivatedRoute, private auth: AuthService) { }

  ngOnInit(): void {
    if (localStorage.getItem("first_name") == null || localStorage.getItem("last_name") == null) {
      this.router.navigate(['/home'])
    }

    this.id = this.route.snapshot.params['id'];
    this.getOne();
  }

  getOne() {
    this.auth.getOne(this.id).subscribe(data => {
      this.data = data
    })
  }
  deleteOne() {
    this.auth.deleteOne(this.id).subscribe(data => {
      this.data = data
    })
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/home'])
  }
  openDialog() {
    const dialogRef = this.dialog.open(RescheduleComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }
  getConfirmation() {
    var retVal = confirm("Do you really want to cancel ?");
    if (retVal == true) {
      this.deleteOne()
      this.router.navigate(['/dashboard'])
      return true;
    } else {
      return false;
    }
  }
}



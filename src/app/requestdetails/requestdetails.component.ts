import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { RescheduleComponent } from '../reschedule/reschedule.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  token = JSON.parse(localStorage.getItem('token'));

  constructor(public dialog: MatDialog, private breakpointObserver: BreakpointObserver, private router: Router
    , private http: HttpClient, private route: ActivatedRoute, private auth: AuthService) { }

  ngOnInit(): void {
    if (localStorage.getItem("id") == null) {
      this.router.navigate(['/home'])
    }

    this.id = this.route.snapshot.params['id'];
    this.getOne();
  }

  getOne() {
    const httpOptions = {
      headers: new HttpHeaders({
        "x-access-token": this.token
      })
    }
    this.auth.getOne(this.id).subscribe(data => {
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
      let body = {
        "status": "Cancelled",
      }
      const httpOptions = {
        headers: new HttpHeaders({
          "x-access-token": this.token
        })
      }
      this.http.patch("http://localhost:3000/NewServiceRequest/status/" + this.id, body, httpOptions)
        .subscribe(data => {
          this.router.navigate(['/dashboard']);
        }, error => {
          console.log(error);
          alert(error);
        });
    }
  }
}



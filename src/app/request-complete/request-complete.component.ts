import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-request-complete',
  templateUrl: './request-complete.component.html',
  styleUrls: ['./request-complete.component.css']
})
export class RequestCompleteComponent implements OnInit {

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
  techID: "";
  token = JSON.parse(localStorage.getItem('token'));

  constructor(public dialog: MatDialog, private breakpointObserver: BreakpointObserver, private router: Router
    , private http: HttpClient, private route: ActivatedRoute, private auth: AuthService) { }

  ngOnInit(): void {
    if (localStorage.getItem("firstname") == null) {
      this.router.navigate(['/home'])
    }
    this.id = this.route.snapshot.params['id'];
    const httpOptions = {
      headers: new HttpHeaders({
        "x-access-token": this.token
      })
    }
    let data:Observable<any>;
      data = this.http.get('http://localhost:3000/NewServiceRequest/'+this.id, httpOptions);
      data.subscribe(result => {
        this.data = result;
        this.techID = result.technician_id
      });
  }
  goAdmin(){
    this.router.navigate(['admin']);
    localStorage.setItem('firstLogin', "true");
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/home'])
  }

  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }
  completeRequest() {
    var retVal = confirm("Request Complete ?");
    if (retVal == true) {
      let body = {
        "status": "Completed",
      }
      let body1 = {
        "active": 1,
      }
      const httpOptions = {
        headers: new HttpHeaders({
          "x-access-token": this.token
        })
      }
      this.http.patch("http://localhost:3000/NewServiceRequest/status/" + this.id, body, httpOptions)
        .subscribe(data => {
          this.router.navigate(['/admin']);
          localStorage.setItem('firstLogin', "true");
        }, error => {
          console.log(error);
          alert(error);
        });
        this.http.patch("http://localhost:3000/technician/active/" + this.techID, body1, httpOptions)
        .subscribe(data => {
          this.router.navigate(['/admin']);
          localStorage.setItem('firstLogin', "true");
        }, error => {
          console.log(error);
          alert(error);
        });
    }
  }
}

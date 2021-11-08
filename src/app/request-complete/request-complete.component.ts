import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
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

  constructor(public dialog: MatDialog, private breakpointObserver: BreakpointObserver, private router: Router
    , private http: HttpClient, private route: ActivatedRoute, private auth: AuthService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getOne();
  }

  getOne() {
    this.auth.getOne(this.id).subscribe(data => {
      this.data = data
    })
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
      this.http.patch("http://localhost:3000/NewServiceRequest/status/" + this.id, body)
        .subscribe(data => {
          this.router.navigate(['/admin']);
        }, error => {
          console.log(error);
          alert(error);
        });
    }
  }

}

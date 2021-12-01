import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  data: [];
  token = JSON.parse(localStorage.getItem('token'));
  isReload = false;

  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));

  constructor(public dialog: MatDialog, private breakpointObserver: BreakpointObserver
    , private router: Router, private http: HttpClient, private auth: AuthService) { }

  AddtechOpenDialog() {
    this.router.navigate(['/add_technician']);
  }
  ngOnInit(): void {
    if (localStorage.getItem("firstname") == null) {
      this.router.navigate(['/home'])
    }
    const httpOptions = {
      headers: new HttpHeaders({
        "x-access-token": this.token
      })
    }
    let data: Observable<any>;
    data = this.http.get('https://dhdev-ayosgamit.herokuapp.com/feedback', httpOptions);
    data.subscribe(result => {
      this.data = result
    });
    if (localStorage.getItem('firstLogin') == 'true') {
      localStorage.setItem('firstLogin', "false")
      window.location.reload()
    }
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/home'])
  }
  goAdmin(){
    this.router.navigate(['admin']);
    localStorage.setItem('firstLogin', "true");
  }
  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }

}

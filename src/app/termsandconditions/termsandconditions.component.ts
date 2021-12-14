import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-termsandconditions',
  templateUrl: './termsandconditions.component.html',
  styleUrls: ['./termsandconditions.component.css']
})
export class TermsandconditionsComponent implements OnInit {

  token = JSON.parse(localStorage.getItem('token'));
  id = JSON.parse(localStorage.getItem('id'));
  fname = "";

  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));
    
  constructor(private router: Router, private shared: SharedService,
    ngZone: NgZone, private http: HttpClient, private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void { 
    const httpOptions = {
      headers: new HttpHeaders({
        "x-access-token": this.token
      })
    }
    let dataa: Observable<any>;
    dataa = this.http.get('https://dhdev-ayosgamit.herokuapp.com/CredentialDB/' + this.id, httpOptions);
    dataa.subscribe(result => {
      this.fname = result.first_name;
    });

  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/home'])
  }
  goDashboard(){
    this.router.navigate(['dashboard'])
    localStorage.setItem('firstLogin', "true")
  }
  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }

}

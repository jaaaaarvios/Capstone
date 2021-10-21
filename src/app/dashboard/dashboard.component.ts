import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RequestdetailsComponent } from '../requestdetails/requestdetails.component';
import { SharedService } from '../shared/shared.service';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';


=======
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth.service';
>>>>>>> 358f1dfdd922ebba95a768f592929375c608b517

@Component({
  selector: 'app-dashboard', 
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  
  user_fname="";
  user_lname="";
  date: Date;
  subscription: any;
  service_request = []

  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));


  
<<<<<<< HEAD
  constructor(private router: Router, public dialog: MatDialog, private http: HttpClient,
    private breakpointObserver: BreakpointObserver, private shared: SharedService, ) {
=======
  constructor(private router: Router, public dialog: MatDialog, 
    private breakpointObserver: BreakpointObserver, private shared: SharedService, private cookieService: CookieService, private auth: AuthService) {
>>>>>>> 358f1dfdd922ebba95a768f592929375c608b517
      {
        setInterval(() => {
          this.date = new Date()
        }, 1000)


      }
     }


     
  ngOnInit(): void {
    this.subscription = this.shared.currentUserFname.subscribe(user_fname => this.user_fname = user_fname);
    this.subscription = this.shared.currentUserLname.subscribe(user_lname => this.user_lname = user_lname);

    let data:Observable<any>;
      data = this.http.get('http://localhost:3000/NewServiceRequest');
      data.subscribe(result => {
        this.service_request = result
        console.log(this.service_request)
      });
  }

  images = [];

  signOut() {
    
    var auth2 = auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');

    this.router.navigate(['/home'])
  });
  }
  
  openDialog() {
    const dialogRef = this.dialog.open(RequestdetailsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }
}

 
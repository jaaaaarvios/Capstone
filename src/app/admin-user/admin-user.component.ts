import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MyErrorStateMatcher } from '../app.component';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {

  users =[];
  token = JSON.parse(localStorage.getItem('token'));
  
  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));

  constructor(public dialog: MatDialog, private breakpointObserver: BreakpointObserver
    ,private router: Router, private http: HttpClient) { }

  // TechprofileOpenDialog() {
  //   const dialogRef = this.dialog.open(TechprofileComponent);
    
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

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
    let data:Observable<any>;
      data = this.http.get('http://localhost:3000/CredentialDB', httpOptions);
      data.subscribe(result => {
        this.users = result
      });
  }

  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }

}

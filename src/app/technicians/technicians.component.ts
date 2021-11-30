import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-technicians',
  templateUrl: './technicians.component.html',
  styleUrls: ['./technicians.component.css']
})
export class TechniciansComponent implements OnInit {

  technicians = [];
  activeTechnicians: any;
  data: any;
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
    data = this.http.get('https://dhdev-ayosgamit.herokuapp.com/technician', httpOptions);
    data.subscribe(result => {
      this.technicians = result
      let acttechnicians = result.filter(function (activeStatus) {
        return activeStatus.active == true;
      });
      this.activeTechnicians = acttechnicians
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

  active(techID) {
    var retVal = confirm("Change active status ?");
    if (retVal == true) {
      let body = {
        "active": 1,
      }
      const httpOptions = {
        headers: new HttpHeaders({
          "x-access-token": this.token
        })
      }
      this.http.patch("https://dhdev-ayosgamit.herokuapp.com/technician/active/" + techID, body, httpOptions)
        .subscribe(data => {
          alert("Updated")
          localStorage.setItem('firstLogin', "true");
          window.location.reload()
        }, error => {
          console.log(error);
          alert(error);
        });
    } else {
      return
    }
  }

  inactive(techID) {
    var retVal = confirm("Change active status ?");
    if (retVal == true) {
      let body = {
        "active": 0,
      }
      const httpOptions = {
        headers: new HttpHeaders({
          "x-access-token": this.token
        })
      }
      this.http.patch("https://dhdev-ayosgamit.herokuapp.com/technician/active/" + techID, body, httpOptions)
        .subscribe(data => {
          alert("Updated")
          localStorage.setItem('firstLogin', "true");
          window.location.reload()
        }, error => {
          console.log(error);
          alert(error);
        });
    } else {
      return
    }
  }

  deleteOne(techID) {
    var retVal = confirm("Do you really want to delete this technician ?");
    if (retVal == true) {
      const httpOptions = {
        headers: new HttpHeaders({
          "x-access-token": this.token
        })
      }
      this.auth.deleteTechnician(techID, httpOptions).subscribe(data => {
        this.data = data
        localStorage.setItem('firstLogin', "true");
        window.location.reload()
      });
    } else {
      return
    }
  }

}

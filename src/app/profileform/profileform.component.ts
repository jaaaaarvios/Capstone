import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profileform',
  templateUrl: './profileform.component.html',
  styleUrls: ['./profileform.component.css']
})
export class ProfileformComponent implements OnInit {

  id=JSON.parse(localStorage.getItem('id'));
  token = JSON.parse(localStorage.getItem('token'));
  fname="";
  lname="";
  email="";
  number="";
  address="";
  addressDetails="";
  property_type="";

  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));

  constructor(private router: Router, private breakpointObserver: BreakpointObserver,
    private http: HttpClient) { }

  ngOnInit(): void {
    if (localStorage.getItem("id") == null) {
      this.router.navigate(['/home'])
    }
    const httpOptions = {
      headers: new HttpHeaders({
        "x-access-token": this.token
      })
    }
    let data:Observable<any>;
      data = this.http.get('http://localhost:3000/CredentialDB/'+this.id, httpOptions);
      data.subscribe(result => {
        this.fname = result.first_name;
        this.lname = result.last_name;
        this.email = result.email;
        this.number = result.number;
        this.address = result.service_address;
        this.addressDetails = result.service_addressDetails;
        this.property_type = result.property_type;
      });
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/home'])
  }

  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }

}

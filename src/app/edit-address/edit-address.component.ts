import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MyErrorStateMatcher } from '../app.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent implements OnInit {

  serviceInfoForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  address = "";
  addressDetails = "";
  property_type = "";
  id = JSON.parse(localStorage.getItem('id'));
  token = JSON.parse(localStorage.getItem('token'));
  property: any[] = ["Condo", "Apartment", "House", "Store", "Office Building", "Warehouse or Storage"];

  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));

  constructor(private router: Router, private breakpointObserver: BreakpointObserver,
    private _formBuilder: FormBuilder, private http: HttpClient, private auth: AuthService) { }

  ngOnInit(): void {

    const httpOptions = {
      headers: new HttpHeaders({
        "x-access-token": this.token
      })
    }

    this.serviceInfoForm = this._formBuilder.group({
      address: ['', Validators.required],
      addressDetails: ['', Validators.required],
      property_type: ['', Validators.required],
    });

    if (localStorage.getItem("id") == null) {
      this.router.navigate(['/home'])
    }

    let data: Observable<any>;
    data = this.http.get('http://localhost:3000/CredentialDB/' + this.id, httpOptions);
    data.subscribe(result => {
      this.serviceInfoForm.setValue({
        address: result.service_address,
        addressDetails: result.service_addressDetails,
        property_type: result.property_type
      });
    });
  }


  logout() {
    localStorage.clear();
    this.router.navigate(['/home'])
  }

  serviceInfoSubmit() {
    const pi = this.serviceInfoForm.value;

    let body = {
      "service_address": pi.address,
      "service_addressDetails": pi.addressDetails,
      "property_type": pi.property_type,
    }
    const httpOptions = {
      headers: new HttpHeaders({
        "x-access-token": this.token
      })
    }

    if (this.serviceInfoForm.valid) {
      this.http.patch("http://localhost:3000/CredentialDB/service/" + this.id, body, httpOptions)
        .subscribe(data => {
          console.log(data, 'Update Success');
          alert("Updated");
          this.serviceInfoForm.reset();
          Object.keys(this.serviceInfoForm.controls).forEach(key => {
            this.serviceInfoForm.get(key).setErrors(null);
            this.router.navigate(['/profile']);
          });
        }, error => {
          console.log(error);
          alert(error);
        });
    }
    else {
      alert('Fill up the required textfields with valid information')
    }
  }

  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }

}

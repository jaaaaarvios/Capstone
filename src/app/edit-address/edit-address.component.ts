import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MyErrorStateMatcher } from '../app.component';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent implements OnInit {

  serviceInfoForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  id=JSON.parse(localStorage.getItem('id'));
  property: any[] = ["Condo", "Apartment", "House", "Store", "Office Building", "Warehouse or Storage"];

  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));

  constructor(private router: Router, private breakpointObserver: BreakpointObserver,
    private _formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.serviceInfoForm = this._formBuilder.group({
      address: ['', Validators.required],
      addressDetails: ['', Validators.required],
      property_type: ['', Validators.required],
    });

    if(localStorage.getItem("first_name") == null ||localStorage.getItem("last_name") == null ){
      this.router.navigate(['/home'])
    }
  }

  logout(){
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

    if (this.serviceInfoForm.valid) {
      this.http.patch("http://localhost:3000/CredentialDB/service/"+this.id, body)
        .subscribe(data => {
          console.log(data, 'Update Success');
          alert("Update Success");
          this.serviceInfoForm.reset();
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

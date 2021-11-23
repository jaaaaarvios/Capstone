import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MyErrorStateMatcher } from '../app.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-bookingsummary-edit',
  templateUrl: './bookingsummary-edit.component.html',
  styleUrls: ['./bookingsummary-edit.component.css']
})
export class BookingsummaryEditComponent implements OnInit {
  subscription: any;
  data: any;

  token = JSON.parse(localStorage.getItem('token'));
  service = JSON.parse(localStorage.getItem('service'));
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  matcher = new MyErrorStateMatcher();
  summaryForm: FormGroup;

  city: any[] = ["Manila City", "Quezon City", "Caloocan City", "Las Piñas City", "Valenzuela City", "Makati City",
    "Malabon City", "Mandaluyong City", "Marikina City", "Muntinlupa City", "Navotas City", "Parañaque City", "Pasay City",
    "Pasig City", "San Juan City", "Taguig City", "Valenzuela City"];

  property_type: any[] = ["Condo", "Apartment", "House", "Store", "Office Building", "Warehouse or Storage"];

  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));

  constructor(public dialog: MatDialog, private breakpointObserver: BreakpointObserver, private _formBuilder: FormBuilder,
    private http: HttpClient, private router: Router, private route: ActivatedRoute, private auth: AuthService) {
  }

  ngOnInit(): void {
    if (localStorage.getItem("service") == null) {
      this.router.navigate(['/dashboard'])
    }
    

    this.summaryForm = this._formBuilder.group({
      service_firstname: ['', Validators.required],
      service_lastname: ['', Validators.required],
      service_phoneNumber: ['', [Validators.required, Validators.pattern]],
      service_address: ['', Validators.required],
      service_addressDetails: ['', Validators.required],
      service_instruction: ['', Validators.required],
      service_city: ['', Validators.required],
      service_property_type: ['', Validators.required],
      service_barangay: ['', Validators.required],
    });
    this.summaryForm.patchValue({
      service_firstname: this.service.service_firstname,
      service_lastname: this.service.service_lastname,
      service_address: this.service.service_address,
      service_phoneNumber: this.service.service_phoneNumber,
      service_addressDetails: this.service.service_addressDetails,
      service_instruction: this.service.service_instruction,
      service_barangay: this.service.service_barangay,
      service_city: this.service.service_city,
      service_property_type: this.service.service_property_type,
    });
  }

  deleteOne() {
    this.auth.deleteRequest(this.service._id).subscribe(data => {
      this.data = data
    })
  }

  cancelRequest() {
    this.router.navigate(['/booking']);
  }
  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }
  getConfirmation() {
    var retVal = confirm("Do you really want to cancel the booking ?");
    if (retVal == true) {
      this.deleteOne()
      localStorage.removeItem("service");
      this.router.navigate(['/dashboard'])
      return true;
    } else {
      return false;
    }
  }
  getConfirmationn() {
    var retVal = confirm("Leaving this page will ");
    if (retVal == true) {
      this.deleteOne()
      localStorage.removeItem("service");
      this.router.navigate(['/dashboard'])
      return true;
    } else {
      return false;
    }
  }
  getConfirmation1() {
    var retVal = confirm("If you exit, your booking progress will be lost.");
    if (retVal == true) {
      this.deleteOne()
      localStorage.removeItem("service");
      this.router.navigate(['/menu_aircon'])
      return true;
    } else {
      return false;
    }
  }
  getConfirmation2() {
    var retVal = confirm("If you exit, your booking progress will be lost.");
    if (retVal == true) {
      this.deleteOne()
      localStorage.removeItem("service");
      this.router.navigate(['/menu_ref'])
      return true;
    } else {
      return false;
    }
  }
  getConfirmation3() {
    var retVal = confirm("If you exit, your booking progress will be lost.");
    if (retVal == true) {
      this.deleteOne()
      localStorage.removeItem("service");
      this.router.navigate(['/menu_fan'])
      return true;
    } else {
      return false;
    }
  }
  getConfirmation4() {
    var retVal = confirm("If you exit, your booking progress will be lost.");
    if (retVal == true) {
      this.deleteOne()
      localStorage.removeItem("service");
      this.router.navigate(['/menu_washing'])
      return true;
    } else {
      return false;
    }
  }
  getConfirmation5() {
    var retVal = confirm("If you exit, your booking progress will be lost.");
    if (retVal == true) {
      this.deleteOne()
      localStorage.removeItem("service");
      this.router.navigate(['/menu_tv'])
      return true;
    } else {
      return false;
    }
  }
  getConfirmation6() {
    var retVal = confirm("If you exit, your booking progress will be lost.");
    if (retVal == true) {
      this.deleteOne()
      localStorage.removeItem("service");
      this.router.navigate(['/pricing'])
      return true;
    } else {
      return false;
    }
  }
  getConfirmation7() {
    var retVal = confirm("If you exit, your booking progress will be lost.");
    if (retVal == true) {
      this.deleteOne()
      localStorage.removeItem("service");
      this.router.navigate(['/contact_us'])
      return true;
    } else {
      return false;
    }
  }
  getConfirmation8() {
    var retVal = confirm("If you exit, your booking progress will be lost.");
    if (retVal == true) {
      this.deleteOne()
      localStorage.removeItem("service");
      this.router.navigate(['/about_us'])
      return true;
    } else {
      return false;
    }
  }
  summarySubmit() {
    
      const summary = this.summaryForm.value;
      let body = {
        "service_firstname": summary.service_firstname,
        "service_lastname": summary.service_lastname,
        "service_address": summary.service_address,
        "service_phoneNumber": summary.service_phoneNumber,
        "service_addressDetails": summary.service_addressDetails,
        "service_instruction": summary.service_instruction,
        "service_barangay": summary.service_barangay,
        "service_city": summary.service_city,
        "service_property_type": summary.service_property_type
      }
      const httpOptions = {
        headers: new HttpHeaders({
          "x-access-token": this.token
        })
      }
      if (this.summaryForm.valid) {
        this.http.patch("http://localhost:3000/NewServiceRequest/summary/"+ this.service._id, body, httpOptions)
          .subscribe(data => {
            console.log(data, 'Update Success');
            alert("Updated");
            localStorage.setItem("service", JSON.stringify(data));
            this.router.navigate(['/summary']);
          }, error => {
            console.log(error);
            alert(error);
          });
      }
      else {
        alert('Fill up text fields.')
      }
      
  }
}

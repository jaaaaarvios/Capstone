import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { MyErrorStateMatcher } from '../app.component';
import { SharedService } from '../shared/shared.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InstallFeeWashingComponent } from '../install-fee-washing/install-fee-washing.component';

declare const L: any;
@Component({
  selector: 'app-washingmachine-install',
  templateUrl: './washingmachine-install.component.html',
  styleUrls: ['./washingmachine-install.component.css']
})
export class WashingmachineInstallComponent implements OnInit {
  unitdetailsForm: FormGroup;
  locationForm: FormGroup;
  scheduleForm: FormGroup;
  contactDetialsForm: FormGroup;
  subscription: Subscription;
  today = new Date();
  tomorrow = new Date();
  email:any;
  service_appliance = "Washing Machine";
  service_type = "Installation";
  service_unitType = "None";
  service_unitProb = "None";
  status = "Pending";
  chupfee = 200;
  unitfee = 0;
  cleanfee = 0;
  topload = 950;
  frontload = 950;
  twintub = 950;
  id = JSON.parse(localStorage.getItem('id'));
  token = JSON.parse(localStorage.getItem('token'));
  activeTechnicians: any;
  fname: any;
  
  matcher = new MyErrorStateMatcher();

  city: any[] = ["Manila City", "Quezon City", "Caloocan City", "Las Piñas City", "Valenzuela City", "Makati City",
    "Malabon City", "Mandaluyong City", "Marikina City", "Muntinlupa City", "Navotas City", "Parañaque City", "Pasay City",
    "Pasig City", "San Juan City", "Taguig City", "Valenzuela City"];

  property_type: any[] = ["Condo", "Apartment", "House", "Store", "Office Building", "Warehouse or Storage"];

  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));

  wm_type: any[] = ["Top Load", "Front Load", "Twin Tub"];

  wm_brand: any[] = ["Aiwa", "American Home", "Asahi", "Camel",
    "Carrier", "Coldfront", "Condura", "Daikin", "Everest",
    "Fujidenzo", "GE", "Concealed", "Gree", "Haeir",
    "Hanabishi", "Hisense", "Hitachi", "Kelvinator", "Kolin",
    "Koppel", "LG", "Lex", "Mabe", "Midea", "Mitsubishi", "National",
    "Panasonic", "Samsung", "Sanyo", "Sharp", "TCLSSSS", "Union", "Xtreme",
    "York", "Other"];

  constructor(private router: Router, private _formBuilder: FormBuilder, public dialog: MatDialog,
    private shared: SharedService, private breakpointObserver: BreakpointObserver, private http: HttpClient) { }

  openDialog() {
    const dialogRef = this.dialog.open(InstallFeeWashingComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/home'])
  }
  goDashboard(){
    this.router.navigate(['dashboard']);
    localStorage.setItem('firstLogin', "true");
  }
  ngOnInit(): void {
    this.tomorrow.setDate(this.today.getDate() + 1);

    if (localStorage.getItem("id") == null) {
      this.router.navigate(['/home'])
    }

    this.unitdetailsForm = this._formBuilder.group({
      service_aptype: ['', Validators.required],
      service_brand: ['', Validators.required],
    });

    this.locationForm = this._formBuilder.group({
      service_city: ['', Validators.required],
      service_property_type: ['', Validators.required],
      service_barangay: [null, Validators.required]
    });

    this.scheduleForm = this._formBuilder.group({
      service_date: [null, Validators.required],
      service_timeslot: ["",  Validators.required]
    });

    this.contactDetialsForm = this._formBuilder.group({
      service_address: ['', Validators.required],
      service_firstname: ['', Validators.required],
      service_lastname: ['', Validators.required],
      service_phoneNumber: ['', [Validators.required, Validators.pattern]],
      service_addressDetails: ['', Validators.required],
      special_instruction: [''],
    });

    const httpOptions = {
      headers: new HttpHeaders({
        "x-access-token": this.token
      })
    }
    let data: Observable<any>;
    data = this.http.get('https://dhdev-ayosgamit.herokuapp.com/CredentialDB/' + this.id, httpOptions);
    data.subscribe(result => {
      this.email = result.email
      this.fname = result.first_name;
      this.contactDetialsForm.setValue({
        service_address: result.service_address,
        service_firstname: result.first_name,
        service_lastname: result.last_name,
        service_phoneNumber: result.number,
        service_addressDetails: result.service_addressDetails,
        special_instruction: ""
      });
      this.locationForm.setValue({
        service_city: result.city,
        service_barangay: result.barangay,
        service_property_type: result.property_type
      });
    });
    let dataa: Observable<any>;
    dataa = this.http.get('https://dhdev-ayosgamit.herokuapp.com/technician', httpOptions);
    dataa.subscribe(result => {
      let acttechnicians = result.filter(function (activeStatus) {
        return activeStatus.active == true;
      });
      this.activeTechnicians = acttechnicians
    });

    if (!navigator.geolocation) {
      console.log('location is not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      const latLong = [coords.latitude, coords.longitude];
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      let mymap = L.map('mapid').setView(latLong, 13);

      var circle = L.circle([51.508, -0.11], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
      }).addTo(mymap);

      L.tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoieGFhYWFhcm9uIiwiYSI6ImNrb3hxczd0ZTA3anAydXFueTQzNmNzM2gifQ.3U1BwgLJM3TXPAS0e2nz-A',
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: 'your.mapbox.access.token',
        }
      ).addTo(mymap);

      let marker = L.marker(latLong).addTo(mymap);

      marker.bindPopup('<b>Hi</b>').openPopup();

      let popup = L.popup()
        .setLatLng(latLong)
        .setContent('Hello')
        .openOn(mymap);
    });
    this.watchPosition();
  }

  watchPosition() {
    let desLat = 0;
    let desLon = 0;

    let id = navigator.geolocation.watchPosition(
      (position) => {
        console.log(
          `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
        );
        if (position.coords.latitude === desLat) {
          navigator.geolocation.clearWatch(id);
        }
      },
      (err) => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  unitdetailsSubmit() {
    if (this.unitdetailsForm.valid) {
      this.shared.changeACType(this.unitdetailsForm.value.service_aptype);
      this.shared.changeACBrand(this.unitdetailsForm.value.service_brand);
    } else {
      return;
    }
  }

  locationSubmit() {
    if (this.locationForm.valid) {
      this.shared.changeCity(this.locationForm.value.service_city);
      this.shared.changeType(this.locationForm.value.service_property_type);
      this.shared.changebarangay(this.locationForm.value.service_barangay);
    } else {
      return;
    }
  }

  schedSubmit() {
    if (this.scheduleForm.valid) {
      this.shared.changeDate(this.scheduleForm.value.service_date);
      this.shared.changeTimeslot(this.scheduleForm.value.service_timeslot);
    } else {
      return;
    }
  }

  contactDetailsSubmit() {
    var retVal = confirm("Proceed to Booking Summary");
    if (retVal == true) {
      const unit = this.unitdetailsForm.value;
      const loc = this.locationForm.value;
      const sched = this.scheduleForm.value;
      const contact = this.contactDetialsForm.value;
      if(unit.service_aptype == "Top Load"){
        var installfee = this.topload

      }
      else if(unit.service_aptype == "Front Load"){
        var installfee = this.frontload

      }
      else if(unit.service_aptype == "Twin Tub"){
        var installfee = this.twintub
      }
      let body = {
        "service_type": this.service_type,
        "service_appliance": this.service_appliance,
        "service_aptype": unit.service_aptype,
        "service_brand": unit.service_brand,
        "service_unitType": this.service_unitType,
        "service_unitProb": this.service_unitProb,
        "service_city": loc.service_city,
        "service_property_type": loc.service_property_type,
        "service_barangay": loc.service_barangay,
        "service_date": sched.service_date,
        "service_timeslot": sched.service_timeslot,
        "service_address": contact.service_address,
        "service_firstname": contact.service_firstname,
        "service_lastname": contact.service_lastname,
        "service_phoneNumber": contact.service_phoneNumber,
        "service_addressDetails": contact.service_addressDetails,
        "status": this.status,
        "checkupfee": this.chupfee,
        "installfee": installfee,
        "cleaningfee": this.cleanfee,
        "unitfee": this.unitfee,
        "createdBy": this.email,
        "special_instruct": contact.special_instruction
      }
      const httpOptions = {
        headers: new HttpHeaders({
          "x-access-token": this.token
        })
      }
      if (this.contactDetialsForm.valid) {
        this.http.post("https://dhdev-ayosgamit.herokuapp.com/NewServiceRequest/repair", body, httpOptions)
          .subscribe(data => {
            console.log(data, 'Booking Success');
            localStorage.setItem("service", JSON.stringify(data));
            this.router.navigate(['/summary'])
          }, error => {
            console.log(error);
            alert(error);
          });
      }
      else {
        return;
      }
      return true;
    } else {
      return false;
    }
  }

  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }


}

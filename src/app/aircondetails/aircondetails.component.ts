import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { MyErrorStateMatcher } from '../app.component';
import { RepairFeeComponent } from '../repair-fee/repair-fee.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

declare const L: any;

@Component({
  selector: 'app-aircondetails',
  templateUrl: './aircondetails.component.html',
  styleUrls: ['./aircondetails.component.css']
})

export class AircondetailsComponent implements OnInit {

  ac_type: any[] = ["Split Type", "Window Type", "Tower", "Cassette",
    "Suspended", "Concealed"];

  ac_brand: any[] = ["Aiwa", "American Home", "Asahi", "Camel",
    "Carrier", "Coldfront", "Condura", "Daikin", "Everest",
    "Fujidenzo", "GE", "Concealed", "Gree", "Haeir",
    "Hanabishi", "Hisense", "Hitachi", "Kelvinator", "Kolin",
    "Koppel", "LG", "Lex", "Mabe", "Midea", "Mitsubishi", "National",
    "Panasonic", "Samsung", "Sanyo", "Sharp", "TCLSSSS", "Union", "Xtreme",
    "York", "Other"];

  ac_unitType: any[] = ["Inverter", "Non-Inverter", "I don't know"];

  ac_unitProblem: any[] = ["Does not start or stop", "Not cooling | Fan blowing warm air",
    "Fan does not blow air at all", "Making noise", "Water Leaking", "Error on display panel",
    "Other", "I don't know"];

  unitdetailsForm: FormGroup;
  locationForm: FormGroup;
  scheduleForm: FormGroup;
  contactDetialsForm: FormGroup;
  subscription: Subscription;
  today = new Date();
  tomorrow = new Date();
  email:any;
  service_appliance = "Aircon";
  service_type = "Repair";
  status = "Pending";
  chupfee = 200;
  installfee = 0;
  cleanfee = 0;
  unitfee = 0;
  inverter = 200;
  id = JSON.parse(localStorage.getItem('id'));
  token = JSON.parse(localStorage.getItem('token'));
  activeTechnicians: any;
  fname: any;

  matcher = new MyErrorStateMatcher();

  city: any[] = ["Manila City", "Quezon City", "Caloocan City", "Las Pi??as City", "Valenzuela City", "Makati City",
    "Malabon City", "Mandaluyong City", "Marikina City", "Muntinlupa City", "Navotas City", "Para??aque City", "Pasay City",
    "Pasig City", "San Juan City", "Taguig City", "Valenzuela City"];

  property_type: any[] = ["Condo", "Apartment", "House", "Store", "Office Building", "Warehouse or Storage"];

  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));
  mapsAPILoader: any;
  currentBusiness: any;
  zoom: number;
  currentLocation: any;

  constructor(private router: Router, private _formBuilder: FormBuilder, public dialog: MatDialog,
      private breakpointObserver: BreakpointObserver, private http: HttpClient) { }

  openDialog() {
    const dialogRef = this.dialog.open(RepairFeeComponent);

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
      service_unitType: ['', Validators.required],
      service_unitProb: ['', Validators.required],
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

     

        let x_coor = position.coords.latitude
        let y_coor = position.coords.longitude
      
      const coords = position.coords;
      const latLong = [coords.latitude, coords.longitude];
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`, coords
      );
      let mymap = L.map('mapid').setView(latLong, 13);

      L.tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoieGFhYWFhcm9uIiwiYSI6ImNrb3hxczd0ZTA3anAydXFueTQzNmNzM2gifQ.3U1BwgLJM3TXPAS0e2nz-A',
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery ?? <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: 'pk.eyJ1IjoiamFhYWFhcnZpcyIsImEiOiJja294cnFhZHgwZzZyMnVtd2Q3YjRlZzdzIn0.vTrhUxiEiHeYenW8gPq_8w',
        }
      ).addTo(mymap);

      

      let marker = L.marker(latLong).addTo(mymap);

      marker.bindPopup('<b>Hi</b>').openPopup();

      let popup = L.popup()
        .setLatLng(latLong)
        .setContent(coords)
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

    } else {
      return;
    }
  }

  locationSubmit() {
    if (this.locationForm.valid) {

    } else {
      return;
    }
  }

  schedSubmit() {
    if (this.scheduleForm.valid) {

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
      if(unit.service_unitType == "Inverter"){
        var inverter = this.inverter
      } else if (unit.service_unitType != "Inverter"){
        var inverter = this.unitfee
      }
      let body = {
        "service_type": this.service_type,
        "service_appliance": this.service_appliance,
        "service_aptype": unit.service_aptype,
        "service_brand": unit.service_brand,
        "service_unitType": unit.service_unitType,
        "service_unitProb": unit.service_unitProb,
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
        "cleaningfee": this.cleanfee,
        "installfee": this.installfee,
        "unitfee": inverter,
        "createdBy": this.email,
        "rate": 0,
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

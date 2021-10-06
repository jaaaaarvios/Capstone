import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { MyErrorStateMatcher } from '../app.component';
import { SharedService } from '../shared/shared.service';

declare const L: any;

@Component({
  selector: 'app-washingmachine-cleaning',
  templateUrl: './washingmachine-cleaning.component.html',
  styleUrls: ['./washingmachine-cleaning.component.css']
})
export class WashingmachineCleaningComponent implements OnInit {
  unitdetailsForm: FormGroup;
  locationForm: FormGroup;
  scheduleForm: FormGroup;
  contactDetialsForm: FormGroup;
  subscription: Subscription;

  service_appliance = "Washing Machine";
  service_aptype = "";
  service_brand = "";
  service_city = "";
  service_property_type = "";
  service_zipcode = null;
  service_date = "";
  service_timeslot = "";
  service_address = "";
  service_firstname = "";
  service_lastname = "";
  service_phoneNumber = null;
  service_addressDetails = "";
  service_instruction = "";

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

  wm_type: any[] = ["Top Load", "Front Load", "Twin Tub","I don't know"];

  wm_brand: any[] = ["Aiwa", "American Home", "Asahi", "Camel",
    "Carrier", "Coldfront", "Condura", "Daikin", "Everest",
    "Fujidenzo", "GE", "Concealed", "Gree", "Haeir",
    "Hanabishi", "Hisense", "Hitachi", "Kelvinator", "Kolin",
    "Koppel", "LG", "Lex", "Mabe", "Midea", "Mitsubishi", "National",
    "Panasonic", "Samsung", "Sanyo", "Sharp", "TCLSSSS", "Union", "Xtreme",
    "York", "Other"];

  constructor(private router: Router, private _formBuilder: FormBuilder, public dialog: MatDialog, 
    private shared: SharedService, private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    //Sending data to the service
    this.subscription = this.shared.currentACType.subscribe(service_aptype => this.service_aptype = service_aptype);
    this.subscription = this.shared.currentACBrand.subscribe(service_brand => this.service_brand = service_brand);
    this.subscription = this.shared.currentCity.subscribe(service_city => this.service_city = service_city);
    this.subscription = this.shared.currentPropertyType.subscribe(service_property_type => this.service_property_type = service_property_type);
    this.subscription = this.shared.currentZipcode.subscribe(service_zipcode => this.service_zipcode = service_zipcode);
    this.subscription = this.shared.currentDate.subscribe(service_date => this.service_date = service_date);
    this.subscription = this.shared.currentTimeslot.subscribe(service_timeslot => this.service_timeslot = service_timeslot);
    this.subscription = this.shared.currentAddress.subscribe(service_address => this.service_address = service_address);
    this.subscription = this.shared.currentFirstname.subscribe(service_firstname => this.service_firstname = service_firstname);
    this.subscription = this.shared.currentLastname.subscribe(service_lastname => this.service_lastname = service_lastname);
    this.subscription = this.shared.currentPhoneNumber.subscribe(service_phoneNumber => this.service_phoneNumber = service_phoneNumber);
    this.subscription = this.shared.currentAddressDetails.subscribe(service_addressDetails => this.service_addressDetails = service_addressDetails);
    this.subscription = this.shared.currentInstruction.subscribe(service_instruction => this.service_instruction = service_instruction);

    this.unitdetailsForm = this._formBuilder.group({
      service_aptype: ['', Validators.required],
      service_brand: ['', Validators.required],
    });

    this.locationForm = this._formBuilder.group({
      service_city: ['', Validators.required],
      service_property_type: ['', Validators.required],
      service_zipcode: [null, Validators.required]
    });

    this.scheduleForm = this._formBuilder.group({
      service_date: [null, Validators.required],
      service_timeslot: [""]
    });

    this.contactDetialsForm = this._formBuilder.group({
      service_address: ['', Validators.required],
      service_firstname: ['', (Validators.required, Validators.maxLength(15))],
      service_lastname: ['', (Validators.required, Validators.maxLength(15))],
      service_phoneNumber: ['', [Validators.required, Validators.pattern]],
      service_addressDetails: ['', Validators.required],
      service_instruction: ['', Validators.required],
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

  unitdetailsSubmit(){
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
      this.shared.changeZipcode(this.locationForm.value.service_zipcode);
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
    if (this.contactDetialsForm.valid) {
      this.shared.changeAddress(this.contactDetialsForm.value.service_address);
      this.shared.changeFirstname(this.contactDetialsForm.value.service_firstname);
      this.shared.changeLastname(this.contactDetialsForm.value.service_lastname);
      this.shared.changePhoneNumber(this.contactDetialsForm.value.service_phoneNumber);
      this.shared.changeAddressDetails(this.contactDetialsForm.value.service_addressDetails);
      this.shared.changeInstruction(this.contactDetialsForm.value.service_instruction);
      this.router.navigate(['/summary'])
    } else {
      return;
    }
  }
  
  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }

}

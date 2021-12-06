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
import { CleaningFeeComponent } from '../cleaning-fee/cleaning-fee.component';

declare const L: any;

@Component({
  selector: 'app-aircon-cleaning',
  templateUrl: './aircon-cleaning.component.html',
  styleUrls: ['./aircon-cleaning.component.css']
})
export class AirconCleaningComponent implements OnInit {

  ac_type: any[] = ["Split", "Window", "Tower", "Cassette",
    "Suspended", "Concealed"];

  ac_brand: any[] = ["Aiwa", "American Home", "Asahi", "Camel",
    "Carrier", "Coldfront", "Condura", "Daikin", "Everest",
    "Fujidenzo", "GE", "Concealed", "Gree", "Haeir",
    "Hanabishi", "Hisense", "Hitachi", "Kelvinator", "Kolin",
    "Koppel", "LG", "Lex", "Mabe", "Midea", "Mitsubishi", "National",
    "Panasonic", "Samsung", "Sanyo", "Sharp", "TCLSSSS", "Union", "Xtreme",
    "York", "Other"];

  ac_unitType: any[] = ["Inverter", "Non-Inverter", "I don't know"];

  unitdetailsForm: FormGroup;
  locationForm: FormGroup;
  scheduleForm: FormGroup;
  contactDetialsForm: FormGroup;
  subscription: Subscription;
  today = new Date();
  tomorrow = new Date();
  email:any;
  service_appliance = "Aircon";
  service_type = "Cleaning";
  service_unitProb = "None";
  status = "Pending";
  chupfee = 200;
  insfee = 0;
  unitfee = 0;
  inverter = 200;
  window_type = 600;
  split_type = 1200;
  tower_type = 1900;
  cassette_type = 2800;
  suspended_type = 2800;
  concealed_type = 2200;
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

  constructor(private router: Router, private _formBuilder: FormBuilder, public dialog: MatDialog,
    private shared: SharedService, private breakpointObserver: BreakpointObserver, private http: HttpClient) { }


  openDialog() {
    const dialogRef = this.dialog.open(CleaningFeeComponent);

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
      service_instruction: ['', Validators.required],
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
        service_instruction: "",
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

      // const searchControl = L.esri.Geocoding.geosearch({
      //   position: "topright",
      //   placeholder: "Enter an address or place e.g. 1 York St",
      //   useMapBounds: false,
      //   providers: [L.esri.Geocoding.arcgisOnlineProvider({
      //     //apikey: apiKey,
      //     nearby: {
      //       lat: -33.8688,
      //       lng: 151.2093
      //     },
      //   })]
      // }).addTo(map);

      // const results = L.layerGroup().addTo(map);

      // searchControl.on("results", (data) => {
      //   results.clearLayers();
      //   for (let i = data.results.length - 1; i >= 0; i--) {
      //     const lngLatString = `${Math.round(data.results[i].latlng.lng * 100000) / 100000}, ${Math.round(data.results[i].latlng.lat * 100000) / 100000}`;
      //     const marker = L.marker(data.results[i].latlng);
      //     marker.bindPopup(`<b>${lngLatString}</b><p>${data.results[i].properties.LongLabel}</p>`)
      //     results.addLayer(marker);
      //     marker.openPopup();
      //   }
      // });
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
      this.shared.changeACUType(this.unitdetailsForm.value.service_unitType);
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
      if (unit.service_aptype == "Window" && unit.service_unitType == "Inverter") {
        var cleanfee = this.window_type
        var inverter = this.inverter
      } else if (unit.service_aptype == "Window" && unit.service_unitType != "Inverter") {
        var cleanfee = this.window_type
        var inverter = this.unitfee
      }

      if (unit.service_aptype == "Split" && unit.service_unitType == "Inverter") {
        var cleanfee = this.split_type
        var inverter = this.inverter
      } else if (unit.service_aptype == "Split" && unit.service_unitType != "Inverter") {
        var cleanfee = this.split_type
        var inverter = this.unitfee
      }
      if (unit.service_aptype == "Tower" && unit.service_unitType == "Inverter") {
        var cleanfee = this.tower_type
        var inverter = this.inverter
      } else if ((unit.service_aptype == "Tower" && unit.service_unitType != "Inverter")) {
        var cleanfee = this.tower_type
        var inverter = this.unitfee
      }
      if (unit.service_aptype == "Cassette" && unit.service_unitType == "Inverter") {
        var cleanfee = this.cassette_type
        var inverter = this.inverter
      } else if (unit.service_aptype == "Cassette" && unit.service_unitType != "Inverter") {
        var cleanfee = this.cassette_type
        var inverter = this.unitfee
      }
      if (unit.service_aptype == "Suspended" && unit.service_unitType == "Inverter") {
        var cleanfee = this.suspended_type
        var inverter = this.inverter
      } else if (unit.service_aptype == "Suspended" && unit.service_unitType != "Inverter") {
        var cleanfee = this.suspended_type
        var inverter = this.unitfee
      }
      if (unit.service_aptype == "Concealed" && unit.service_unitType == "Inverter") {
        var cleanfee = this.concealed_type
        var inverter = this.inverter
      } else if (unit.service_aptype == "Concealed" && unit.service_unitType != "Inverter") {
        var cleanfee = this.concealed_type
        var inverter = this.unitfee
      }

      let body = {
        "service_type": this.service_type,
        "service_appliance": this.service_appliance,
        "service_aptype": unit.service_aptype,
        "service_brand": unit.service_brand,
        "service_unitType": unit.service_unitType,
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
        "service_instruction": contact.service_instruction,
        "status": this.status,
        "checkupfee": this.chupfee,
        "cleaningfee": cleanfee,
        "installfee": this.insfee,
        "unitfee": inverter,
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

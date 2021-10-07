import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-bookingsummary',
  templateUrl: './bookingsummary.component.html',
  styleUrls: ['./bookingsummary.component.css']
})

export class BookingsummaryComponent implements OnInit {
  subscription: any;

  service_appliance = "";
  service_type = "";
  service_aptype = "";
  service_brand = "";
  service_unitType="";
  service_unitProb="";
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

  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));
  
  constructor(public dialog: MatDialog, private breakpointObserver: BreakpointObserver,
    private shared: SharedService, private router: Router) { }

  ngOnInit(): void {
    //Sending and retrieving data in the service
    this.subscription = this.shared.currentAppliance.subscribe(service_appliance => this.service_appliance = service_appliance);
    this.subscription = this.shared.currentServiceType.subscribe(service_type => this.service_type = service_type);
    this.subscription = this.shared.currentACType.subscribe(service_aptype => this.service_aptype = service_aptype);
    this.subscription = this.shared.currentACBrand.subscribe(service_brand => this.service_brand = service_brand);
    this.subscription = this.shared.currentACUType.subscribe(service_unitType => this.service_unitType = service_unitType);
    this.subscription = this.shared.currentACUProb.subscribe(service_unitProb => this.service_unitProb = service_unitProb);
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
  }

  cancelRequest(){
    this.router.navigate(['/booking']);
  }
  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  user_fname: any;
  user_lname: any;
  user_email: any;
  user_password: any;

  service_appliance: any;
  service_aptype: any;
  service_brand: any;
  service_unitType: any;
  service_unitProb: any;

  service_city: any;
  service_property_type: any;
  service_zipcode: number;
  service_date: any;
  service_timeslot: any;
  service_address: any;
  service_firstname: any;
  service_lastname: any;
  service_phoneNumber: number;
  service_addressDetails: any;
  service_instruction: any;

  private UserFnameSource = new BehaviorSubject('');
  currentUserFname = this.UserFnameSource.asObservable();

  private UserLnameSource = new BehaviorSubject('');
  currentUserLname = this.UserLnameSource.asObservable();

  private UserEmailSource = new BehaviorSubject('n');
  currentUserEmail = this.UserEmailSource.asObservable();

  private UserPasswordSource = new BehaviorSubject('n');
  currentUserPassword = this.UserPasswordSource.asObservable();

  private citySource = new BehaviorSubject('None');
  currentCity = this.citySource.asObservable();

  private property_typeSource = new BehaviorSubject('None');
  currentPropertyType = this.property_typeSource.asObservable();

  private zipcodeSource = new BehaviorSubject(null);
  currentZipcode = this.zipcodeSource.asObservable();

  private dateSource = new BehaviorSubject(null);
  currentDate = this.dateSource.asObservable();

  private timeslotSource = new BehaviorSubject(null);
  currentTimeslot = this.timeslotSource.asObservable();

  private addressSource = new BehaviorSubject('None');
  currentAddress = this.addressSource.asObservable();

  private firstnameSource = new BehaviorSubject('None');
  currentFirstname = this.firstnameSource.asObservable();

  private lastnameSource = new BehaviorSubject('None');
  currentLastname = this.lastnameSource.asObservable();

  private numberSource = new BehaviorSubject(null);
  currentPhoneNumber = this.numberSource.asObservable();

  private address_detailsSource = new BehaviorSubject('None');
  currentAddressDetails = this.address_detailsSource.asObservable();

  private instructionSource = new BehaviorSubject('None');
  currentInstruction = this.instructionSource.asObservable();

  private applianceSource = new BehaviorSubject('None');
  currentAppliance = this.applianceSource.asObservable();

  private acTypeSource = new BehaviorSubject('None');
  currentACType = this.acTypeSource.asObservable();

  private acBrandSource = new BehaviorSubject('None');
  currentACBrand = this.acBrandSource.asObservable();

  private acUTypeSource = new BehaviorSubject('None');
  currentACUType = this.acUTypeSource.asObservable();

  private acUProbSource = new BehaviorSubject('None');
  currentACUProb = this.acUProbSource.asObservable();


  constructor() { }

  changeUserFname(user_fname: string) {
    this.UserFnameSource.next(user_fname)
  }
  changeUserLname(user_lname: string) {
    this.UserLnameSource.next(user_lname)
  }
  changeUserEmail(user_email: string) {
    this.UserEmailSource.next(user_email)
  }
  changeUserPassword(user_password: string) {
    this.UserPasswordSource.next(user_password)
  }

  //appliane details
  changeAppliance(service_appliance: string) {
    this.applianceSource.next(service_appliance)
  }
  changeACType(service_aptype: string) {
    this.acTypeSource.next(service_aptype)
  }
  changeACBrand(service_brand: string) {
    this.acBrandSource.next(service_brand)
  }
  changeACUType(service_unitType: string) {
    this.acUTypeSource.next(service_unitType)
  }

  changeACUProb(service_unitProb: string) {
    this.acUProbSource.next(service_unitProb)
  }

  //Service Details
  changeCity(service_city: string) {
    this.citySource.next(service_city)
  }
  changeType(service_property_type: string) {
    this.property_typeSource.next(service_property_type)
  }
  changeZipcode(service_zipcode: number) {
    this.zipcodeSource.next(service_zipcode)
  }
  changeDate(service_date: string) {
    this.dateSource.next(service_date)
  }
  changeTimeslot(service_timeslot: string) {
    this.timeslotSource.next(service_timeslot)
  }
  changeAddress(service_address: string) {
    this.addressSource.next(service_address)
  }
  changeFirstname(service_firstname: string) {
    this.firstnameSource.next(service_firstname)
  }
  changeLastname(service_lastname: string) {
    this.lastnameSource.next(service_lastname)
  }
  changePhoneNumber(service_phoneNumber: number) {
    this.numberSource.next(service_phoneNumber)
  }
  changeAddressDetails(service_addressDetails: string) {
    this.address_detailsSource.next(service_addressDetails)
  }
  changeInstruction(service_instruction: string) {
    this.instructionSource.next(service_instruction)
  }

}

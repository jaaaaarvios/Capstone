import { Component, OnInit } from '@angular/core';

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
  "Hanabishi", "Hisense","Hitachi","Kelvinator","Kolin", 
  "Koppel", "LG","Lex","Mabe","Midea", "Mitsubishi", "National",
  "Panasonic","Samsung","Sanyo","Sharp","TCLSSSS","Union","Xtreme",
  "York", "Other"];

  ac_unitType: any[] = ["Inverter", "Non-Inverter", "I don't know"];

  ac_unitProblem: any[] = ["Does not start or stop", "Not cooling | Fan blowing warm air",
   "Fan does not blow air at all", "Making noise", "Water Leaking", "Error on display panel",
    "Other", "I don't know"];

  constructor() { }

  ngOnInit(): void {
  }

}

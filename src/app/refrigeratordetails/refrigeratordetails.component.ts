import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refrigeratordetails',
  templateUrl: './refrigeratordetails.component.html',
  styleUrls: ['./refrigeratordetails.component.css']
})
export class RefrigeratordetailsComponent implements OnInit {

  ref_type: any[] = ["Single Door", "Two Door Top Freezer", "Two Door Bottom Freezer",
   "Multi Door-Shelves", "Chest Freezer", "Single Door Commercial"];

  ref_brand: any[] = ["Aiwa", "American Home", "Asahi", "Camel", 
  "Carrier", "Coldfront", "Condura", "Daikin", "Everest", 
  "Fujidenzo", "GE", "Concealed", "Gree", "Haeir", 
  "Hanabishi", "Hisense","Hitachi","Kelvinator","Kolin", 
  "Koppel", "LG","Lex","Mabe","Midea", "Mitsubishi", "National",
  "Panasonic","Samsung","Sanyo","Sharp","TCLSSSS","Union","Xtreme",
  "York", "Other"];

  ref_unitType: any[] = ["Inverter", "Non-Inverter", "I don't know"];

  ref_unitProblem: any[] = ["Freezer is cold but refrigerator warm", "Refrigerator is freezing food",
   "Making noise", "Ice and or Water dispenser is not working", "Temperature control not working", 
   "Refrigerator light is not workin", "Other", "I don't know"];

  constructor() { }

  ngOnInit(): void {
  }

}

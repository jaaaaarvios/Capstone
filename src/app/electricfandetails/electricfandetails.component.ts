import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electricfandetails',
  templateUrl: './electricfandetails.component.html',
  styleUrls: ['./electricfandetails.component.css']
})
export class ElectricfandetailsComponent implements OnInit {

  efan_type: any[] = ["Ceiling Fan", "Table Fan", "Tower Fan","Floor Fan",
    "Pedestal Fan", "Exhaust Fan", "Wall Mounted Fan","Misting Fan"];

  efan_brand: any[] = ["Aiwa", "American Home", "Asahi", "Camel",
    "Carrier", "Coldfront", "Condura", "Daikin", "Everest",
    "Fujidenzo", "GE", "Concealed", "Gree", "Haeir",
    "Hanabishi", "Hisense", "Hitachi", "Kelvinator", "Kolin",
    "Koppel", "LG", "Lex", "Mabe", "Midea", "Mitsubishi", "National",
    "Panasonic", "Samsung", "Sanyo", "Sharp", "TCLSSSS", "Union", "Xtreme",
    "York", "Other"];

  efan_unitType: any[] = ["Axial", "Forward Curved", "Centrifugal",
  "Backward-Inclined","I don't know"];

  efan_unitProblem: any[] = ["Flickering light", "Wobbly fan",
    "Making noise", "Stuck on one speed", "Fan doesn’t turn on",
    "Other", "I don't know"];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-washingmachinedetails',
  templateUrl: './washingmachinedetails.component.html',
  styleUrls: ['./washingmachinedetails.component.css']
})
export class WashingmachinedetailsComponent implements OnInit {

  wm_type: any[] = ["Top Load", "Front Load", "Twin Tub","I don't know"];

  wm_brand: any[] = ["Aiwa", "American Home", "Asahi", "Camel",
    "Carrier", "Coldfront", "Condura", "Daikin", "Everest",
    "Fujidenzo", "GE", "Concealed", "Gree", "Haeir",
    "Hanabishi", "Hisense", "Hitachi", "Kelvinator", "Kolin",
    "Koppel", "LG", "Lex", "Mabe", "Midea", "Mitsubishi", "National",
    "Panasonic", "Samsung", "Sanyo", "Sharp", "TCLSSSS", "Union", "Xtreme",
    "York", "Other"];

    wm_unitProblem: any[] = ["Does not start or stop", "Leaking water",
    "Not draining water", "Continuously Spinning", "Does not spin or agitate",
    "Vibrating or shaking", "Fills water slowly", "Making noise","Washer is overflowing",
    "Door or lid does not lock", "Stops mid-cycle", "Other", "I don't know"];

  constructor() { }

  ngOnInit(): void {
  }

}

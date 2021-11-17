import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  token = localStorage.getItem("token");
  
  constructor() { }

  ngOnInit(): void {
  }

}

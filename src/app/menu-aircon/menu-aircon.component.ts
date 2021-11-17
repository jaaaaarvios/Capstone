import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-aircon',
  templateUrl: './menu-aircon.component.html',
  styleUrls: ['./menu-aircon.component.css']
})
export class MenuAirconComponent implements OnInit {

  token = localStorage.getItem("token");
  constructor() { }

  ngOnInit(): void {
  }

}

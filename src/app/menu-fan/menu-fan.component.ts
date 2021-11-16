import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-fan',
  templateUrl: './menu-fan.component.html',
  styleUrls: ['./menu-fan.component.css']
})
export class MenuFanComponent implements OnInit {
  token = localStorage.getItem("token");
  constructor() { }

  ngOnInit(): void {
  }

}

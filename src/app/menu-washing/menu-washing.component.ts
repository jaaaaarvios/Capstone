import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-washing',
  templateUrl: './menu-washing.component.html',
  styleUrls: ['./menu-washing.component.css']
})
export class MenuWashingComponent implements OnInit {
  token = localStorage.getItem("token");
  constructor() { }

  ngOnInit(): void {
  }

}

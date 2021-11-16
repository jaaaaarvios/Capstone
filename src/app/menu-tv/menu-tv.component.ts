import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-tv',
  templateUrl: './menu-tv.component.html',
  styleUrls: ['./menu-tv.component.css']
})
export class MenuTvComponent implements OnInit {
  token = localStorage.getItem("token");
  constructor() { }

  ngOnInit(): void {
  }

}

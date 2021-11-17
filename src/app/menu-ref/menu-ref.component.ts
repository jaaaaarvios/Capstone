import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-ref',
  templateUrl: './menu-ref.component.html',
  styleUrls: ['./menu-ref.component.css']
})
export class MenuRefComponent implements OnInit {
  token = localStorage.getItem("token");
  constructor() { }

  ngOnInit(): void {
  }

}

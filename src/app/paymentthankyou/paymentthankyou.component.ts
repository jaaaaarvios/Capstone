import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymentthankyou',
  templateUrl: './paymentthankyou.component.html',
  styleUrls: ['./paymentthankyou.component.css']
})
export class PaymentthankyouComponent implements OnInit {

  token = JSON.parse(localStorage.getItem('token'));

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("id") == null) {
      this.router.navigate(['/home'])
    }
  }

}

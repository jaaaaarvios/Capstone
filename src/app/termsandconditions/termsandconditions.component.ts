import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-termsandconditions',
  templateUrl: './termsandconditions.component.html',
  styleUrls: ['./termsandconditions.component.css']
})
export class TermsandconditionsComponent implements OnInit {

  token = localStorage.getItem("token")
    
  constructor(private router: Router, private shared: SharedService,
    ngZone: NgZone) {}

  ngOnInit(): void { 

  }
  goDashboard(){
    this.router.navigate(['dashboard'])
    localStorage.setItem('firstLogin', "true")
  }

}

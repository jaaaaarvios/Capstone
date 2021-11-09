import { Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { SharedService } from '../shared/shared.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
    
  constructor(private router: Router, private shared: SharedService,
    ngZone: NgZone) {}

  ngOnInit(): void { 

  }

}

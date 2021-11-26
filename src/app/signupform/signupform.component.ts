import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';
import { Observable, Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {
  value = '';
  hide = true;
  minPw = 8;
  maxPw = 15;
  guser: any;
  metaservice: any;

  user_fname = "";
  user_lname = "";
  user_semail = "";
  user_spassword = "";
  token = localStorage.getItem("token");

  public showPassword: boolean;
  public showPasswordOnPress: boolean;

  signupForm: FormGroup;
  subscription: Subscription;
  property: any[] = ["Condo", "Apartment", "House", "Store", "Office Building", "Warehouse or Storage"];
  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));

  constructor(private router: Router, private shared: SharedService, private http: HttpClient,
    ngZone: NgZone, private breakpointObserver: BreakpointObserver, private auth: AuthService) {

    // window['onSignIn'] = user => ngZone.run(
    //   () => {
    //     this.afterSignUp(user);
    //     console.log("success")
    //   }
    // );
  }

  afterSignUp(googleUser) {
    this.router.navigate(['/dashboard'])
    console.log(googleUser)
    this.guser = googleUser;
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      user_fname: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z_ ]{3,40}"), Validators.maxLength(15)]),
      user_lname: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z_ ]{2,40}"), Validators.maxLength(15)]),
      user_semail: new FormControl('', [Validators.required]),
      user_spassword: new FormControl('', [Validators.required, Validators.minLength(this.minPw), Validators.maxLength(this.maxPw)]),
      user_saddress: new FormControl('', [Validators.required]),
      user_sptype: new FormControl('', [Validators.required]),
    });

  }

  SignUpSubmit() {
    const val = this.signupForm.value;
    let body = {
      "first_name": val.user_fname,
      "last_name": val.user_lname,
      "email": val.user_semail,
      "password": val.user_spassword,
      "number": "None",
      "service_address": val.user_saddress,
      "service_addressDetails": "None",
      "property_type": val.user_sptype,
      "city": "None",
      "barangay": "None",
      "active": "1"
    }
    if (this.signupForm.valid) {
      this.http.post("http://localhost:3000/CredentialDB", body)
        .subscribe(data => {
          console.log(data, 'success');
          alert("Sign up successfully");
          this.signupForm.reset();
          Object.keys(this.signupForm.controls).forEach(key => {
            this.signupForm.get(key).setErrors(null);
          });
        }, error => {
          console.log(error);
          alert("The email already exists");
        });
    }
    else {
      alert("Fill up the required textfields with valid information");
    }
  }

  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }
}

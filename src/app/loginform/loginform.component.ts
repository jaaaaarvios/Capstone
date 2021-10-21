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
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
})

export class LoginformComponent implements OnInit {
  value = '';
  hide = true;
  minPw = 8;
  maxPw = 15;
  guser: any;
  metaservice: any;

  items = [];

  user_email = "";
  user_password = "";

  user_fname = "";
  user_lname = "";
  user_semail = "";
  user_spassword = "";

  public showPassword: boolean;
  public showPasswordOnPress: boolean;

  userForm: FormGroup;
  signupForm: FormGroup;
  subscription: Subscription;

  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));

  constructor(private router: Router, private shared: SharedService, private http: HttpClient,
    ngZone: NgZone, private breakpointObserver: BreakpointObserver, private auth: AuthService) {

    window['onSignIn'] = user => ngZone.run(
      () => {
        this.afterSignUp(user);
        console.log("success")
      }
    );
  }

  afterSignUp(googleUser) {
    this.router.navigate(['/dashboard'])
    console.log(googleUser)
    this.guser = googleUser;
  }


  onSubmit() {
    this.router.navigate(['/dashboard'])
  }
  onSubmit1() {
    this.router.navigate(['/admin'])
  }

  ngOnInit(): void {
    this.subscription = this.shared.currentUserFname.subscribe(user_fname => this.user_fname = user_fname);
    this.subscription = this.shared.currentUserLname.subscribe(user_lname => this.user_lname = user_lname);
    this.subscription = this.shared.currentUserEmail.subscribe(user_semail => this.user_semail = user_semail);
    this.subscription = this.shared.currentUserPassword.subscribe(user_spassword => this.user_spassword = user_spassword);

    this.userForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(this.minPw)]),
    });

    this.signupForm = new FormGroup({
      user_fname: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z_ ]{3,40}"), Validators.maxLength(15)]),
      user_lname: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z_ ]{2,40}"), Validators.maxLength(15)]),
      user_semail: new FormControl('', [Validators.required]),
      user_spassword: new FormControl('', [Validators.required, Validators.minLength(this.minPw), Validators.maxLength(this.maxPw)]),
    });

  }

  onClickSubmit() {

    const val = this.userForm.value;

    if(this.userForm.valid){
      this.auth.login(val).subscribe(result => {
        if(result) {
          console.log(result);
          alert(result.message);
          this.router.navigate(['/dashboard'])
        } else {
          alert("Invalid Informations")
        }
      }), error => {
        console.log(error);
        alert("Invalid Informations")
      }
    }
    else if (val.email == "admin" && val.password == "admin") {
      alert("Login Successfully");
      this.onSubmit1();
    }
    else if (val.email == "" && val.password == "") {
      alert("Invalid Information. Please try again.");
    }
    else {
      alert("Invalid Information. Please try again.");
      this.userForm.reset();
      Object.keys(this.userForm.controls).forEach(key => {
        this.userForm.get(key).setErrors(null);
      });
    }
  }

  SignUpSubmit() {

    const val = this.signupForm.value;
    let body = {
      "first_name": val.user_fname,
      "last_name": val.user_lname,
      "email": val.user_semail,
      "password": val.user_spassword,
      "number": "None",
      "service_address": "None",
      "service_addressDetails": "None",
      "property_type": "None"
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




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

  users: any;

  user_email: any;;
  user_password: any;;

  user_fname = "";
  user_lname = "";
  user_semail = "";
  user_spassword = "";
  admin = "admin@admin.com"
  token = localStorage.getItem("token");

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
    try {
      const val = this.userForm.value
      if (val.email == this.admin) {
        this.auth.admin(val).subscribe(result => {
          if (result) {
            localStorage.setItem("id", JSON.stringify(result._id));
            localStorage.setItem("firstname", JSON.stringify(result.first_name));
            localStorage.setItem("token", JSON.stringify(result.token));
            localStorage.setItem('firstLogin', "true")
            alert(result.message);
            this.router.navigate(['/admin'])
          }
        }, error => {
          console.log(error);
          alert("Invalid Email or Password");
          this.userForm.reset();
        });
      }
      else if (val.email != this.admin) {
        this.auth.login(val).subscribe(result => {
          if (result) {
            localStorage.setItem("id", JSON.stringify(result._id));
            localStorage.setItem("token", JSON.stringify(result.token));
            localStorage.setItem('firstLogin', "true")
            console.log(result);
            alert(result.message);
            this.router.navigate(['/profile'])
          }
        }, error => {
          console.log(error);
          alert("Invalid Email or Password");
          this.userForm.reset();
        });
      }
      else {
        alert("Invalid Information. Please try again.");
        this.userForm.reset();
        Object.keys(this.userForm.controls).forEach(key => {
          this.userForm.get(key).setErrors(null);
        });

      }
    } catch (err) {
      console.log(err)
    }

  }

  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }

}




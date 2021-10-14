import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';
import { Observable, Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

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
 
  constructor(private router: Router, private shared: SharedService,
    ngZone: NgZone, private breakpointObserver: BreakpointObserver) {

      window ['onSignIn'] = user => ngZone.run(
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
      user_email: new FormControl('', [Validators.required]),
      user_password: new FormControl('', [Validators.required, Validators.minLength(this.minPw)]),
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
    
    if (val.user_email == this.user_semail && val.user_password == this.user_spassword) {
      alert("Login Successfully");
      this.onSubmit();
    }
    else if(val.user_email == "admin" && val.user_password == "admin"){
      alert("Login Successfully");
      this.onSubmit1();
    }
    else if(val.user_email == "" && val.user_password == ""){
      alert("Invalid Information. Please try again.");
    }
    else{
      alert("Invalid Information. Please try again.");
      this.userForm.reset();
      Object.keys(this.userForm.controls).forEach(key => {
        this.userForm.get(key).setErrors(null) ;
      });
    }
  }

  SignUpSubmit(){
    if(this.signupForm.valid){
        alert("Sign up successfully");
        console.log(this.signupForm.value);
        this.shared.changeUserFname(this.signupForm.value.user_fname);
        this.shared.changeUserLname(this.signupForm.value.user_lname);
        this.shared.changeUserEmail(this.signupForm.value.user_semail);
        this.shared.changeUserPassword(this.signupForm.value.user_spassword);
        this.signupForm.reset();
        Object.keys(this.signupForm.controls).forEach(key => {
          this.signupForm.get(key).setErrors(null) ;
        });
      }
      else{
        alert("Fill up the required textfields with valid information");
      }
  }

  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }

}




import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
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
 
  constructor(private router: Router, private shared: SharedService,
    ngZone: NgZone
    ) {

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
    if (this.userForm.value.user_email == this.user_semail && this.userForm.value.user_password == this.user_spassword) {
      alert("Login Successfully");
      this.onSubmit();
    }
    else if(this.userForm.value.user_email == "admin" && this.userForm.value.user_password == "admin"){
      alert("Login Successfully");
      this.onSubmit1();
    }
    else if(this.userForm.value.user_email == "" && this.userForm.value.user_password == ""){
      alert("Invalid Information. Please try again.");
      this.userForm.reset();
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
        alert("Fill up the textfields with valid information");
      }
  }

}


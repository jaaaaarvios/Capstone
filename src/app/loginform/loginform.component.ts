import { Component, NgZone, OnInit } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-loginform', 
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
})

export class LoginformComponent implements OnInit {
  value = '';
  hide = true;
  guser: any;
  metaservice: any;
  
  // email = new FormControl('', [Validators.required, Validators.email]);
 
  constructor(private router: Router, 
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
    
  }
  
  onClickSubmit(data){
    if(data.login_email == "user@gmail.com" && data.login_password == "password")
    {
      this.onSubmit();
    }
    if(data.login_email == "")
    {
      alert("Input your email address")
    }
    if(data.login_password == "")
    {
      alert("Input your password")
    }
    if(data.login_email != "user@gmail.com" && data.login_password != "password" && data.login_email != "admin" && data.login_password != "admin")
    {
      alert("Wrong information")
    }
    if(data.login_email == "admin" && data.login_password == "admin"){
      this.onSubmit1();
    }
  }

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }
  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

}




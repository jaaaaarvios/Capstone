import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MyErrorStateMatcher } from '../app.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  value = '';
  hide = true;
  hidee = true;
  minPw = 8;
  maxPw = 15;
  matcher = new MyErrorStateMatcher();
  id = JSON.parse(localStorage.getItem('id'));
  token = JSON.parse(localStorage.getItem('token'));
  changePassForm: FormGroup;
  fname: any;

  public showPassword: boolean;
  public showPasswordOnPress: boolean;

  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));

  constructor(private router: Router, private breakpointObserver: BreakpointObserver, private http: HttpClient
    ,private auth: AuthService) { }

  ngOnInit(): void {
    this.changePassForm = new FormGroup({
      newPassword: new FormControl('', [Validators.required, Validators.minLength(this.minPw), Validators.maxLength(this.maxPw)]),
      confirmpassword: new FormControl('', [Validators.required]),
    });

    if (localStorage.getItem("id") == null) {
      this.router.navigate(['/home'])
    }
    const httpOptions = {
      headers: new HttpHeaders({
        "x-access-token": this.token
      })
    }
    let data: Observable<any>;
    data = this.http.get('https://dhdev-ayosgamit.herokuapp.com/CredentialDB/' + this.id, httpOptions);
    data.subscribe(result => {
      this.fname = result.first_name;
    });
  }
  
  goDashboard(){
    this.router.navigate(['dashboard'])
    localStorage.setItem('firstLogin', "true")
  }

  // getting the form control elements
  get password(): AbstractControl {
    return this.changePassForm.controls['newPassword'];
  }

  get confirm_password(): AbstractControl {
    return this.changePassForm.controls['confirmpassword'];
  }

  onPasswordChange() {
    if (this.confirm_password.value == this.password.value) {
      this.confirm_password.setErrors(null);
      let body = {
        "password": this.password.value,
      }
      const httpOptions = {
        headers: new HttpHeaders({
          "x-access-token": this.token
        })
      }
      if (this.changePassForm.valid) {
        this.http.patch("https://dhdev-ayosgamit.herokuapp.com/CredentialDB/password/" + this.id, body, httpOptions)
          .subscribe(data => {
            console.log(data, 'Update Success');
            alert("Updated");
            this.changePassForm.reset();
          }, error => {
            console.log(error);
            alert(error);
          });
      }
      else {
        alert('Fill up the required textfields with valid information')
      }
    } else {
      this.confirm_password.setErrors({ mismatch: true });
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/home'])
  }

  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }

}

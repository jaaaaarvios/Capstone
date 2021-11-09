import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MyErrorStateMatcher } from '../app.component';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  value = '';
  hide = true;
  minPw = 8;
  maxPw = 15;
  matcher = new MyErrorStateMatcher();
  id = JSON.parse(localStorage.getItem('id'));
  token = JSON.parse(localStorage.getItem('token'));
  changePassForm: FormGroup;

  public showPassword: boolean;
  public showPasswordOnPress: boolean;

  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));
    
  constructor(private router: Router, private breakpointObserver: BreakpointObserver, private http: HttpClient) { }

  ngOnInit(): void {
    this.changePassForm = new FormGroup({
      currentPassword: new FormControl('', [Validators.required, Validators.minLength(this.minPw), Validators.maxLength(this.maxPw)]),
      newPassword: new FormControl('', [Validators.required, Validators.minLength(this.minPw), Validators.maxLength(this.maxPw)]),
    });

    if (localStorage.getItem("id") == null) {
      this.router.navigate(['/home'])
    }
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/home'])
  }

  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }

  changePassSubmit(){
    const cp = this.changePassForm.value;

    let body = {
      "password": cp.newPassword,
    }
    const httpOptions = {
      headers: new HttpHeaders({
        "x-access-token": this.token
      })
    }

    if (this.changePassForm.valid) {
      this.http.patch("http://localhost:3000/CredentialDB/password/"+this.id, body, httpOptions)
        .subscribe(data => {
          console.log(data, 'Update Success');
          alert("Update Success");
          this.changePassForm.reset();
        }, error => {
          console.log(error);
          alert(error);
        });
    }
    else {
      alert('Fill up the required textfields with valid information')
    }
  }

}

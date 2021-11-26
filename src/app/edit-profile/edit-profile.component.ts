import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MyErrorStateMatcher } from '../app.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  personalInfoForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  id=JSON.parse(localStorage.getItem('id'));
  token = JSON.parse(localStorage.getItem('token'));

  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));
  fname: any;

  constructor(private router: Router, private breakpointObserver: BreakpointObserver
    , private _formBuilder: FormBuilder, private http: HttpClient, private auth: AuthService) { }

  ngOnInit(): void {
    this.personalInfoForm = this._formBuilder.group({
      firstname: ['', [Validators.required, Validators.pattern("[a-zA-Z_ ]{3,40}"), Validators.maxLength(15)]],
      lastname: ['', [Validators.required, Validators.pattern("[a-zA-Z_ ]{3,40}"), Validators.maxLength(15)]],
      email: ['', Validators.required],
      number: ['', Validators.required],
    });

    if (localStorage.getItem("id") == null) {
      this.router.navigate(['/home'])
    }

    const httpOptions = {
      headers: new HttpHeaders({
        "x-access-token": this.token
      })
    }

    let data:Observable<any>;
    data = this.http.get('http://localhost:3000/CredentialDB/'+this.id, httpOptions);
    data.subscribe(result => {
      this.fname = result.first_name;
      this.personalInfoForm.setValue({
        firstname: result.first_name,
        lastname: result.last_name,
        email: result.email,
        number: result.number
      });
    });
  }
  goDashboard(){
    this.router.navigate(['dashboard'])
    localStorage.setItem('firstLogin', "true")
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
  personalInfoSubmit(){

    const pi = this.personalInfoForm.value;
    let body = {
      "first_name": pi.firstname,
      "last_name": pi.lastname,
      "email": pi.email,
      "number": pi.number,
    }
    const httpOptions = {
      headers: new HttpHeaders({
        "x-access-token": this.token
      })
    }
    if (this.personalInfoForm.valid) {
      this.http.patch("http://localhost:3000/CredentialDB/personal/"+this.id, body, httpOptions)
        .subscribe(data => {
          console.log(data, 'Update Success');
          alert("Updated");
          this.personalInfoForm.reset();
          Object.keys(this.personalInfoForm.controls).forEach(key => {
            this.personalInfoForm.get(key).setErrors(null);
            this.router.navigate(['/profile']);
          });
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

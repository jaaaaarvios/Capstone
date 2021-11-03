import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MyErrorStateMatcher } from '../app.component';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  personalInfoForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  id=JSON.parse(localStorage.getItem('id'));

  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));

  constructor(private router: Router, private breakpointObserver: BreakpointObserver
    , private _formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.personalInfoForm = this._formBuilder.group({
      firstname: ['', [Validators.required, Validators.pattern("[a-zA-Z_ ]{3,40}"), Validators.maxLength(15)]],
      lastname: ['', [Validators.required, Validators.pattern("[a-zA-Z_ ]{3,40}"), Validators.maxLength(15)]],
      email: ['', Validators.required],
      number: ['', Validators.required],
    });

    if(localStorage.getItem("first_name") == null ||localStorage.getItem("last_name") == null ){
      this.router.navigate(['/home'])
    }

    let data:Observable<any>;
    data = this.http.get('http://localhost:3000/CredentialDB/'+this.id);
    data.subscribe(result => {
      this.personalInfoForm.setValue({
        firstname: result.first_name,
        lastname: result.last_name,
        email: result.email,
        number: result.number
      });
    });
  }

  signOut() {
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

    if (this.personalInfoForm.valid) {
      this.http.patch("http://localhost:3000/CredentialDB/personal/"+this.id, body)
        .subscribe(data => {
          console.log(data, 'Update Success');
          alert("Update Success");
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

  // public addItem(menuID: number, itemToAdd: ItemClass): void { 
  //   console.log('sending patch request to add an item');

  //   this.http.patch(`example.com/add/{menuId}`, itemToAdd).subscribe(
  //     res => { 
  //       console.log('received ok response from patch request');
  //     },
  //     error => {
  //       console.error('There was an error during the request');
  //       console.log(error);
  //     });

  //   console.log('request sent. Waiting for response...');
  // }

  // httpPatchExample() {
  //   this.http.patch("http://localhost:3000/CredentialDB/personal/:id",
  //       {
  //           "description": "Angular Tutorial For Beginners PATCH TEST",
  //       })
  //       .subscribe(
  //           (val) => {
  //               console.log("PATCH call successful value returned in body", 
  //                           val);
  //           },
  //           response => {
  //               console.log("PATCH call in error", response);
  //           },
  //           () => {
  //               console.log("The PATCH observable is now completed.");
  //           });
  //   }

}

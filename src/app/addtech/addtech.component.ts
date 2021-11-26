import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MyErrorStateMatcher } from '../app.component';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-addtech',
  templateUrl: './addtech.component.html',
  styleUrls: ['./addtech.component.css']
})
export class AddtechComponent implements OnInit {
  url: any;
  imageSrc: string | ArrayBuffer;
  token = JSON.parse(localStorage.getItem('token'));

  matcher = new MyErrorStateMatcher();

  addTech: FormGroup;

  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));

  constructor(private formBuilder: FormBuilder, private router: Router,
    private breakpointObserver: BreakpointObserver, private http: HttpClient) { }

  onUpload() {
  }

  ngOnInit(): void {
    if (localStorage.getItem("firstname") == null) {
      this.router.navigate(['/home'])
    }
    this.addTech = this.formBuilder.group({
      tech_name: ['', Validators.required],
      tech_gender: ['', Validators.required],
      tech_birthdate: ['', Validators.required],
      tech_number: ['', Validators.required],
      tech_address: ['', Validators.required],
    });
  }

  onCheckboxChange(e) {
    const tech_specialization: FormArray = this.addTech.get('tech_specialization') as FormArray;

    if (e.target.checked) {
      tech_specialization.push(new FormControl(e.target.value));
    } else {
      const index = tech_specialization.controls.findIndex(x => x.value === e.target.value);
      tech_specialization.removeAt(index);
    }
  }

  submit() {
    const val = this.addTech.value;
    let body = {
      "fullname": val.tech_name,
      "gender": val.tech_gender,
      "birthdate": val.tech_birthdate,
      "number": val.tech_number,
      "address": val.tech_address,
      "active": 1,
      "rate": 5
    }
    const httpOptions = {
      headers: new HttpHeaders({
        "x-access-token": this.token
      })
    }
    if (this.addTech.valid) {
      console.log(this.addTech.value);
      this.http.post("http://localhost:3000/technician", body, httpOptions)
        .subscribe(data => {
          console.log(data, 'success');
          this.router.navigate(['/technicians']);
          localStorage.setItem('firstLogin', "true");
          alert("Added Successfully!");
        }, error => {
          console.log(error)
        });
    }
    else {
      alert("Fill up the requirements.");
    }

  }
  goAdmin(){
    this.router.navigate(['admin']);
    localStorage.setItem('firstLogin', "true");
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

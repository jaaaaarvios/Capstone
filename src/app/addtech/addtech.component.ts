import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MyErrorStateMatcher } from '../app.component';

@Component({
  selector: 'app-addtech',
  templateUrl: './addtech.component.html',
  styleUrls: ['./addtech.component.css']
})
export class AddtechComponent implements OnInit {
  url: any;
  imageSrc: string | ArrayBuffer;

  matcher = new MyErrorStateMatcher();

  addTech: FormGroup;
  specializationList: any = [
    { id: 1, job: 'Appliances Repair' },
    { id: 2, job: 'Appliances cleaning' },
    { id: 3, job: 'Installation and Dismantling' }
  ];

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
      tech_specialization: this.formBuilder.array([], [Validators.required]),
      tech_name: ['', Validators.required],
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
      "specialization": val.tech_specialization,
      "number": val.tech_number,
      "address": val.tech_address,
      "active": "1"
    }
    if (this.addTech.valid) {
      console.log(this.addTech.value);
      this.http.post("http://localhost:3000/technician", body)
        .subscribe(data => {
          console.log(data, 'success');
          this.router.navigate(['/technicians']);
          alert("Added Successfully!");
        }, error => {
          console.log(error)
        });
    }
    else {
      alert("Fill up the requirements.");
    }

  }

  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }

}

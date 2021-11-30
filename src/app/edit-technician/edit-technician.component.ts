import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MyErrorStateMatcher } from '../app.component';

@Component({
  selector: 'app-edit-technician',
  templateUrl: './edit-technician.component.html',
  styleUrls: ['./edit-technician.component.css']
})
export class EditTechnicianComponent implements OnInit {
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
  id: any;

  constructor(private formBuilder: FormBuilder, private router: Router,  private route: ActivatedRoute,
    private breakpointObserver: BreakpointObserver, private http: HttpClient) { }

  onUpload() {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (localStorage.getItem("firstname") == null) {
      this.router.navigate(['/home'])
    }
    this.addTech = this.formBuilder.group({
      tech_name: ['', Validators.required],
      tech_gender: ['', Validators.required],
      tech_id: ['', Validators.required],
      tech_number: ['', Validators.required],
      tech_address: ['', Validators.required],
    });
    
    const httpOptions = {
      headers: new HttpHeaders({
        "x-access-token": this.token
      })
    }
    let data:Observable<any>;
    data = this.http.get('https://dhdev-ayosgamit.herokuapp.com/technician/'+this.id, httpOptions);
    data.subscribe(result => {
      this.addTech.setValue({
        tech_name: result.fullname,
        tech_gender: result.gender,
        tech_id: result.techID,
        tech_number: result.number,
        tech_address: result.address
      });
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
  goAdmin(){
    this.router.navigate(['admin']);
    localStorage.setItem('firstLogin', "true");
  }

  submit() {
    const val = this.addTech.value;
    let body = {
      "fullname": val.tech_name,
      "gender": val.tech_gender,
      "techID": val.tech_birthdate,
      "number": val.tech_number,
      "address": val.tech_address,
    }
    const httpOptions = {
      headers: new HttpHeaders({
        "x-access-token": this.token
      })
    }
    if (this.addTech.valid) {
      console.log(this.addTech.value);
      this.http.patch("https://dhdev-ayosgamit.herokuapp.com/technician/update/" + this.id, body, httpOptions)
        .subscribe(data => {
          console.log(data, 'success');
          this.router.navigate(['/technicians']);
          localStorage.setItem('firstLogin', "true");
          alert("Updated");
        }, error => {
          console.log(error)
        });
    }
    else {
      alert("Fill up the requirements.");
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

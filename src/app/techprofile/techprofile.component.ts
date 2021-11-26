import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MyErrorStateMatcher } from '../app.component';

@Component({
  selector: 'app-techprofile',
  templateUrl: './techprofile.component.html',
  styleUrls: ['./techprofile.component.css']
})
export class TechprofileComponent implements OnInit {
  url: any;
  imageSrc: string | ArrayBuffer;
  token = JSON.parse(localStorage.getItem('token'));
  data: any;
  id: any;
  matcher = new MyErrorStateMatcher();

  addTech: FormGroup;

  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));


  constructor(private formBuilder: FormBuilder, private router: Router,  private route: ActivatedRoute,
    private breakpointObserver: BreakpointObserver, private http: HttpClient) { }

  onUpload() {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (localStorage.getItem("firstname") == null) {
      this.router.navigate(['/home'])
    }
    const httpOptions = {
      headers: new HttpHeaders({
        "x-access-token": this.token
      })
    }
    let data:Observable<any>;
    data = this.http.get('http://localhost:3000/technician/'+this.id, httpOptions);
    data.subscribe(result => {
      this.data = result;
    });
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

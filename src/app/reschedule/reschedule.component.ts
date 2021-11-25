import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfirmcancelComponent } from '../confirmcancel/confirmcancel.component';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-reschedule',
  templateUrl: './reschedule.component.html',
  styleUrls: ['./reschedule.component.css']
})
export class RescheduleComponent implements OnInit {

  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));
    
    scheduleForm: FormGroup;
    id: any;
    token = JSON.parse(localStorage.getItem('token'));
    today = new Date();
    tomorrow = new Date();
    activeTechnicians: any;
  
    constructor(public dialog: MatDialog, private http: HttpClient,
      private router: Router, private _formBuilder: FormBuilder,  private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) { }
  
    ngOnInit(): void {
      this.tomorrow.setDate(this.today.getDate() + 1);
  
      this.scheduleForm = this._formBuilder.group({
        service_date: [null, Validators.required],
        service_timeslot: [""]
      });
      if (localStorage.getItem("id") == null) {
        this.router.navigate(['/home'])
      }
      this.id = this.route.snapshot.params['id'];
  
      const httpOptions = {
        headers: new HttpHeaders({
          "x-access-token": this.token
        })
      }
      let dataa: Observable<any>;
      dataa = this.http.get('http://localhost:3000/technician', httpOptions);
      dataa.subscribe(result => {
        let acttechnicians = result.filter(function (activeStatus) {
          return activeStatus.active == true;
        });
        this.activeTechnicians = acttechnicians
      });
  
    }
    schedSubmit() {
      const sched = this.scheduleForm.value;
      let body = {
        "service_date": sched.service_date,
        "service_timeslot": sched.service_timeslot,
      }
  
      if (this.scheduleForm.valid) {
        var retVal = confirm("Are you sure you want to reschedule?");
        if (retVal == true) {
          const httpOptions = {
            headers: new HttpHeaders({
              "x-access-token": this.token
            })
          }
          this.http.patch("http://localhost:3000/NewServiceRequest/schedule/" + this.id, body, httpOptions)
            .subscribe(data => {
              alert("Updated");
              this.router.navigate(['/dashboard'])
            }, error => {
              console.log(error);
              alert(error);
            });
        }
        else {
          return;
        }
        return true;
      } else {
        return false;
      }
    }
  }
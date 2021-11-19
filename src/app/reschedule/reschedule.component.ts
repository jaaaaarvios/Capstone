import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmcancelComponent } from '../confirmcancel/confirmcancel.component';

@Component({
  selector: 'app-reschedule',
  templateUrl: './reschedule.component.html',
  styleUrls: ['./reschedule.component.css']
})
export class RescheduleComponent implements OnInit {

  scheduleForm: FormGroup;
  id: any;
  token = JSON.parse(localStorage.getItem('token'));

  constructor(public dialog: MatDialog, private http: HttpClient,
    private router: Router, private _formBuilder: FormBuilder,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.scheduleForm = this._formBuilder.group({
      service_date: [null, Validators.required],
      service_timeslot: [""]
    });
    if (localStorage.getItem("id") == null) {
      this.router.navigate(['/home'])
    }
    this.id = this.route.snapshot.params['id'];
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




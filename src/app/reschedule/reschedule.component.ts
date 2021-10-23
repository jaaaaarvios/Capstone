import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmcancelComponent } from '../confirmcancel/confirmcancel.component';

@Component({
  selector: 'app-reschedule',
  templateUrl: './reschedule.component.html',
  styleUrls: ['./reschedule.component.css']
})
export class RescheduleComponent implements OnInit {

  scheduleForm: FormGroup;

  constructor(public dialog: MatDialog, private http: HttpClient, 
    private router: Router, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.scheduleForm = this._formBuilder.group({
      service_date: [null, Validators.required],
      service_timeslot: [""]
    });
    if(localStorage.getItem("first_name") == null ||localStorage.getItem("last_name") == null ){
      this.router.navigate(['/home'])
    }
  }
  // openDialog(){
  //   const dialogRef = this.dialog.open(ConfirmcancelComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //     this.router.navigate(['/dashboard'])
  //   });
  // }

  schedSubmit(){
    const sched = this.scheduleForm.value;
    let body = {
      "service_date": sched.service_date,
      "service_timeslot": sched.service_timeslot,
    }

    if (this.scheduleForm.valid) {
      this.http.patch("http://localhost:3000/NewServiceRequest/schedule/:id", body)
        .subscribe(data => {
          console.log(data, 'Rescheduled');
          alert("Rescheduled");
          this.router.navigate(['/summary'])
        }, error => {
          console.log(error);
          alert(error);
        });
    }
    else {
      return;
    }
  }
  getConfirmation() {
    var retVal = confirm("Are you sure you want to cancel?");
    if( retVal == true ) {
       this.router.navigate(['/summary'])
       return true;
    } else {
       return false;
    }
 }

}
 



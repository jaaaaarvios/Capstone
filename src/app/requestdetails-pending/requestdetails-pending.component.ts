import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { RescheduleComponent } from '../reschedule/reschedule.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-requestdetails-pending',
  templateUrl: './requestdetails-pending.component.html',
  styleUrls: ['./requestdetails-pending.component.css']
})
export class RequestdetailsPendingComponent implements OnInit {
  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  id: any;
  data: any;
  techID: "";
  technician: any;
  token = JSON.parse(localStorage.getItem('token'));
  userID = JSON.parse(localStorage.getItem('id'));
  cancelreasonForm: FormGroup;
  fname: any;

  constructor(public dialog: MatDialog, private breakpointObserver: BreakpointObserver, private router: Router, private _formBuilder: FormBuilder,
    private http: HttpClient, private route: ActivatedRoute, config: NgbModalConfig, private modalService: NgbModal,) { }

  ngOnInit(): void {
    if (localStorage.getItem("id") == null) {
      this.router.navigate(['/home'])
    }

    this.cancelreasonForm = this._formBuilder.group({
      reason: ['', Validators.required],
    });

    this.id = this.route.snapshot.params['id'];

    const httpOptions = {
      headers: new HttpHeaders({
        "x-access-token": this.token
      })
    }
    let data: Observable<any>;
    data = this.http.get('https://dhdev-ayosgamit.herokuapp.com/NewServiceRequest/' + this.id, httpOptions);
    data.subscribe(result => {
      this.data = result;
    });
    let dataa: Observable<any>;
    dataa = this.http.get('https://dhdev-ayosgamit.herokuapp.com/CredentialDB/' + this.userID, httpOptions);
    dataa.subscribe(result => {
      this.fname = result.first_name;
    });
  }

  open(cancelReason) {
    this.modalService.open(cancelReason);
  }
  goDashboard(){
    this.router.navigate(['dashboard']);
    localStorage.setItem('firstLogin', "true");
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/home'])
  }
  openDialog() {
    const dialogRef = this.dialog.open(RescheduleComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }
  getConfirmation() {
    var retVal = confirm("Do you really want to cancel ?");
    if (retVal == true) {
      let body = {
        "status": "Cancelled",
        "reason": this.cancelreasonForm.value.reason
      }
      const httpOptions = {
        headers: new HttpHeaders({
          "x-access-token": this.token
        })
      }
      this.http.patch("https://dhdev-ayosgamit.herokuapp.com/NewServiceRequest/cancel-status/" + this.id, body, httpOptions)
        .subscribe(data => {
          this.router.navigate(['dashboard']);
          localStorage.setItem('firstLogin', "true");
          let ref = document.getElementById('close');
          ref?.click();
          this.cancelreasonForm.reset();
        }, error => {
          console.log(error);
          alert(error);
        });
    }
  }

}

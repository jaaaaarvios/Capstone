import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-requestdetails-admin',
  templateUrl: './requestdetails-admin.component.html',
  styleUrls: ['./requestdetails-admin.component.css']
})
export class RequestdetailsAdminComponent implements OnInit {

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
  request: any;
  technician: [];
  techID: "";
  token = JSON.parse(localStorage.getItem('token'));
  cancelreasonForm: FormGroup;
  isReload = false;

  constructor(public dialog: MatDialog, private breakpointObserver: BreakpointObserver, private router: Router,  private _formBuilder: FormBuilder
    , private http: HttpClient, private route: ActivatedRoute, config: NgbModalConfig, private modalService: NgbModal,) { }

  ngOnInit(): void {
    if (localStorage.getItem('firstLogin') == 'true') {
      localStorage.setItem('firstLogin', "false")
      window.location.reload()
    }
    if (localStorage.getItem("firstname") == null) {
      this.router.navigate(['/home'])
    }
    this.id = this.route.snapshot.params['id'];
    const httpOptions = {
      headers: new HttpHeaders({
        "x-access-token": this.token
      })
    }
    let data: Observable<any>;
    data = this.http.get('http://localhost:3000/NewServiceRequest/' + this.id, httpOptions);
    data.subscribe(result => {
      this.request = result;
      this.techID = result.technician_id
    });

    let dataa:Observable<any>;
    dataa = this.http.get('http://localhost:3000/technician', httpOptions);
    dataa.subscribe(result => {
      let technicians = result.filter(function (activeStatus) {
        return activeStatus.active == true;
      });
      this.technician = technicians
    });

    this.cancelreasonForm = this._formBuilder.group({
      reason: ['', Validators.required],
    });
  }

  open(cancelReason) {
    this.modalService.open(cancelReason);
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

  approvedRequest() {
    var retVal = confirm("Do you really want to approve the request ?");
    if (retVal == true) {
      let body = {
        "status": "Pending (Approved)",
      }
      let body1 = {
        "active": 0,
      }
      const httpOptions = {
        headers: new HttpHeaders({
          "x-access-token": this.token
        })
      }
      this.http.patch("http://localhost:3000/NewServiceRequest/status/" + this.id, body, httpOptions)
        .subscribe(data => {
          this.router.navigate(['/admin']);
          localStorage.setItem('firstLogin', "true");
        }, error => {
          console.log(error);
          alert(error);
        });

        this.http.patch("http://localhost:3000/technician/active/" + this.techID, body1, httpOptions)
        .subscribe(data => {
          this.router.navigate(['/admin']);
          localStorage.setItem('firstLogin', "true");
        }, error => {
          console.log(error);
          alert(error);
        });
    }

  }
  rejectRequest() {
    var retVal = confirm("Do you really want to reject the request ?");
    if (retVal == true) {
      let body = {
        "status": "Rejected",
        "reason": this.cancelreasonForm.value.reason
      }
      const httpOptions = {
        headers: new HttpHeaders({
          "x-access-token": this.token
        })
      }
      this.http.patch("http://localhost:3000/NewServiceRequest/cancel-status/" + this.id, body, httpOptions)
        .subscribe(data => {
          this.router.navigate(['/admin']);
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

  deploy(techID){
    let body = {
      "technician_id": techID,
    }
    let body1 = {
      "active": 0,
    }
    const httpOptions = {
      headers: new HttpHeaders({
        "x-access-token": this.token
      })
    }
      this.http.patch("http://localhost:3000/NewServiceRequest/deploy/" + this.id, body, httpOptions)
      .subscribe(data => {
      }, error => {
        console.log(error);
        alert(error);
      });
      var tech_id = techID
      this.http.patch("http://localhost:3000/technician/active/" + tech_id, body1, httpOptions)
      .subscribe(data => {
        alert("Deployed")
        localStorage.setItem('firstLogin', "true");
      }, error => {
        console.log(error);
        alert(error);
      });
  }

}

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
  selector: 'app-requestdetails-complete',
  templateUrl: './requestdetails-complete.component.html',
  styleUrls: ['./requestdetails-complete.component.css']
})
export class RequestdetailsCompleteComponent implements OnInit {
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
  rateForm: FormGroup;
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;

  constructor(private router: Router, public dialog: MatDialog, private http: HttpClient, config: NgbModalConfig, private modalService: NgbModal,
    private breakpointObserver: BreakpointObserver, private _formBuilder: FormBuilder, private route: ActivatedRoute) { 
      config.backdrop = 'static';
      config.keyboard = false;
    }

  ngOnInit(): void {
    this.rateForm = this._formBuilder.group({
      technician_feedback: ['', Validators.required],
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
    let data: Observable<any>;
    data = this.http.get('http://localhost:3000/NewServiceRequest/' + this.id, httpOptions);
    data.subscribe(result => {
      this.data = result;
      this.techID = result.technician_id;
      data = this.http.get('http://localhost:3000/technician/' +  this.techID , httpOptions);
      data.subscribe(result => {
        this.technician = result
      });
    });
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
    var retVal = confirm("Done ?");
    if (retVal == true) {
      if (this.rateForm.valid) {
        let body = {
          "rate": this.selectedValue,
          "feedback": this.rateForm.value.technician_feedback
        }
        const httpOptions = {
          headers: new HttpHeaders({
            "x-access-token": this.token
          })
        }
          this.http.patch("http://localhost:3000/technician/rate/" + this.techID, body, httpOptions)
          .subscribe(data => {
            this.router.navigate(['/dashboard']);
            let ref = document.getElementById('close');
            ref?.click();
            this.rateForm.reset();
          }, error => {
            console.log(error);
            alert(error);
          });
      }
    }
  }

  open(ratingFeedback) {
    this.modalService.open(ratingFeedback);
  }

  countStar(star) {
    this.selectedValue = star;
  }

}

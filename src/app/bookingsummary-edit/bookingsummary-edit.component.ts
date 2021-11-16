import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-bookingsummary-edit',
  templateUrl: './bookingsummary-edit.component.html',
  styleUrls: ['./bookingsummary-edit.component.css']
})
export class BookingsummaryEditComponent implements OnInit {
  subscription: any;
  data: any;
  id: any;
  token = JSON.parse(localStorage.getItem('token'));
  service = JSON.parse(localStorage.getItem('service'));
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  summaryForm: FormGroup;
  
  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));

  constructor(public dialog: MatDialog, private breakpointObserver: BreakpointObserver, private _formBuilder: FormBuilder,
    private http: HttpClient, private router: Router,  private route: ActivatedRoute, private auth: AuthService) {
  }

  ngOnInit(): void {
    if (localStorage.getItem("service") == null) {
      this.router.navigate(['/dashboard'])
    }
    this.id = this.route.snapshot.params['id'];

    this.summaryForm = this._formBuilder.group({

    });

  }

  deleteOne() {
    this.auth.deleteRequest(this.service._id).subscribe(data => {
      this.data = data
    })
  }

  cancelRequest() {
    this.router.navigate(['/booking']);
  }
  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }
  getConfirmation() {
    var retVal = confirm("Do you really want to cancel ?");
    if (retVal == true) {
      this.deleteOne()
      localStorage.removeItem("service");
      this.router.navigate(['/dashboard'])
      return true;
    } else {
      return false;
    }
  }
  summarySubmit(){
    return
  }
}

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  date: Date;
  service_request = []
  
  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));

  cols$: Observable<number> = this.breakpointObserver
  .observe([Breakpoints.Small, Breakpoints.XSmall])
  .pipe(
    map((result) => {
      if (result.breakpoints[Breakpoints.XSmall]) {
        return 1;
      } else if (result.breakpoints[Breakpoints.Small]) {
        return 2;
      } else {
        return 3;
      }
    }),
  );

  constructor( private breakpointObserver: BreakpointObserver, private http: HttpClient) { 
    setInterval(() => {
      this.date = new Date()
    }, 1000)
  }

  ngOnInit(): void {
    let data:Observable<any>;
      data = this.http.get('http://localhost:3000/NewServiceRequest');
      data.subscribe(result => {
        this.service_request = result
        console.log(this.service_request)
      });
  }

  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }

}

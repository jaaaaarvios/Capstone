import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-techprofile',
  templateUrl: './techprofile.component.html',
  styleUrls: ['./techprofile.component.css']
})
export class TechprofileComponent implements OnInit {

  id: any;
  data: any;
  drawer: any;

  technicians =[];
  
  @ViewChild('drawer') 
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));


  constructor(private route: ActivatedRoute, private auth: AuthService,
     private breakpointObserver: BreakpointObserver, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("firstname") == null) {
      this.router.navigate(['/home'])
    }
    this.id = this.route.snapshot.params['id'];
    this.getOne();
  }

  getOne() {
    this.auth.getTechnician(this.id).subscribe(data => {
      this.data = data
    })
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

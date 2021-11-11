import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-techprofile',
  templateUrl: './techprofile.component.html',
  styleUrls: ['./techprofile.component.css']
})
export class TechprofileComponent implements OnInit {

  id: any;
  data: any;

  constructor(private route: ActivatedRoute, private auth: AuthService, private router: Router) { }

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

}

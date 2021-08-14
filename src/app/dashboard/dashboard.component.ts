import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { RequestdetailsComponent } from '../requestdetails/requestdetails.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {


  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {

  }

  openDialog() {
    const dialogRef = this.dialog.open(RequestdetailsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
 
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { RescheduleComponent } from '../reschedule/reschedule.component';

@Component({
  selector: 'app-requestdetails',
  templateUrl: './requestdetails.component.html',
  styleUrls: ['./requestdetails.component.css']
})
export class RequestdetailsComponent implements OnInit {
  

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  openDialog() {
    const dialogRef = this.dialog.open(RescheduleComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
 


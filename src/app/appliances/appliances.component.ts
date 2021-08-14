import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {AircondetailsComponent} from '../../app/aircondetails/aircondetails.component';

@Component({
  selector: 'app-appliances',
  templateUrl: './appliances.component.html',
  styleUrls: ['./appliances.component.css']
})
export class AppliancesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(AircondetailsComponent);
    

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {GencleaningdetailsComponent} from '../../app/gencleaningdetails/gencleaningdetails.component';
import {RefrigeratordetailsComponent} from '../../app/refrigeratordetails/refrigeratordetails.component';
import {ElectricfandetailsComponent} from '../../app/electricfandetails/electricfandetails.component';
import {WashingmachinedetailsComponent} from '../../app/washingmachinedetails/washingmachinedetails.component';

@Component({
  selector: 'app-housecleaning',
  templateUrl: './housecleaning.component.html',
  styleUrls: ['./housecleaning.component.css']
})
export class HousecleaningComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
    GencleanOpenDialog() {
      const dialogRef = this.dialog.open(GencleaningdetailsComponent);
      
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
    RefrigeratorOpenDialog() {
      const dialogRef = this.dialog.open(RefrigeratordetailsComponent);
      
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
    ElectricfanOpenDialog() {
      const dialogRef = this.dialog.open(ElectricfandetailsComponent);
      
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
    WashingmachineOpenDialog() {
      const dialogRef = this.dialog.open(WashingmachinedetailsComponent);
      
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
  ngOnInit(): void {
  }

}

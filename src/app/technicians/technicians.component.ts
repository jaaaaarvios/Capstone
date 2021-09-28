import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TechprofileComponent } from '../techprofile/techprofile.component';
import {AddtechComponent} from '../addtech/addtech.component';

@Component({
  selector: 'app-technicians',
  templateUrl: './technicians.component.html',
  styleUrls: ['./technicians.component.css']
})
export class TechniciansComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  TechprofileOpenDialog() {
    const dialogRef = this.dialog.open(TechprofileComponent);
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  AddtechOpenDialog() {
    const dialogRef = this.dialog.open(AddtechComponent);
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void {
  }

}

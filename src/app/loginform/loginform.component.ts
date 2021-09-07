import { Component, OnInit } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-loginform', 
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],

})
export class LoginformComponent implements OnInit {
  value = '';
  hide = true;
  
  constructor() { 
    
  }

  ngOnInit(): void {
    
  }
}




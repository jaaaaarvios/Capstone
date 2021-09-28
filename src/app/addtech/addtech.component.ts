import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-addtech',
  templateUrl: './addtech.component.html',
  styleUrls: ['./addtech.component.css']
})
export class AddtechComponent implements OnInit {
  url: any;
  imageSrc: string | ArrayBuffer;

  onUpload()
  {
    
  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  name = new FormControl('', [Validators.required, Validators.required]);

  getErrorMessage() {
    if (this.name.hasError('required')) {
      return 'Enter a name';
    }
  
  
  

  AddtechComponent.constructor(); { }

  this.ngOnInit()  
{

}


    }
  }

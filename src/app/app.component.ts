import { Component, } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public form: FormGroup;
  rating: number;

  token = JSON.parse(localStorage.getItem('token'));

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router){
    this.rating = 0;
    this.form = this.fb.group({
      rating: ['', Validators.required],
    })
  }

ngOnInit()
 {
  const token = this.token
  if (this.auth.tokenExpired(token)) {
    alert("Login Expires");
    localStorage.clear();
    this.router.navigate(['/login']);
  } else {
    return
  }
}
title = 'Techlean'
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}

  
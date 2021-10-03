import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AppliancesComponent } from '../appliances/appliances.component';


import '@adyen/adyen-web/dist/adyen.css';



declare const L: any;

@Component({
  selector: 'app-servicedetails',
  templateUrl: './servicedetails.component.html',
  styleUrls: ['./servicedetails.component.css']
})
export class ServicedetailsComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  address: any;


  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(AppliancesComponent);
    

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    if (!navigator.geolocation) {
      console.log('location is not supported');
  }
  navigator.geolocation.getCurrentPosition((position) => {
    const coords = position.coords;
    const latLong = [coords.latitude, coords.longitude];
    this.address = latLong;
    console.log(
      `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
    );
    let mymap = L.map('mapid').setView(latLong, 13);
  
    var circle = L.circle([51.508, -0.11], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500
  }).addTo(mymap);
  
    L.tileLayer(
      'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoieGFhYWFhcm9uIiwiYSI6ImNrb3hxczd0ZTA3anAydXFueTQzNmNzM2gifQ.3U1BwgLJM3TXPAS0e2nz-A',
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token',
      }
    ).addTo(mymap);
  
    let marker = L.marker(latLong).addTo(mymap);
  
    marker.bindPopup('<b>Hi</b>').openPopup();
  
    let popup = L.popup()
      .setLatLng(latLong)
      .setContent('Hello')
      .openOn(mymap);
  });
  this.watchPosition();

 
  }
/*
   clientKey = document.getElementById("clientKey").innerHTML;
   type = document.getElementById("type").innerHTML;

   async testConfig() {
     
   let configuration = {
      paymentMethodsResponse: paymentMethodsResponse, // The `/paymentMethods` response from the server.
      clientKey: "AQEshmfuXNWTK0Qc+iSRlmU1tOuVfYVEG5ZYS2xC32Hu2kJPb0uenSqT6fSv2bcQwV1bDb7kfNy1WIxIIkxgBw==-DXqlgocqZ8XYCKQAMHSpqtmmECy65bLYxcI2cXwCDTI=-<u>N#:~8Nqcu3_92", // Web Drop-in versions before 3.10.1 use originKey instead of clientKey.
      locale: "en-US",
      environment: "test",
      onSubmit: (state, dropin) => {
          // Global configuration for onSubmit
          // Your function calling your server to make the `/payments` request
         makePayment(state.data)
            .then(response => {
              if (response.action) {
                // Drop-in handles the action object from the /payments response
                dropin.handleAction(response.action);
              } else {
                // Your function to show the final result to the shopper
                showFinalResult(response);
              }
            })
            .catch(error => {
              throw Error(error);
            });
        },
      onAdditionalDetails: (state, dropin) => {
        // Your function calling your server to make a `/payments/details` request
        makeDetailsCall(state.data)
          .then(response => {
            if (response.action) {
              // Drop-in handles the action object from the /payments response
              dropin.handleAction(response.action);
            } else {
              // Your function to show the final result to the shopper
              showFinalResult(response);
            }
          })
          .catch(error => {
            throw Error(error);
          });
      },
      paymentMethodsConfiguration: {
        card: { // Example optional configuration for Cards
          hasHolderName: true,
          holderNameRequired: true,
          enableStoreDetails: true,
          hideCVC: false, // Change this to true to hide the CVC field for stored cards
          name: 'Credit or debit card',
          onSubmit: () => {}, // onSubmit configuration for card payments. Overrides the global configuration.
        }
      }
     };
     
  }*/

  
  watchPosition() {
  let desLat = 0;
  let desLon = 0;
  
  let id = navigator.geolocation.watchPosition(
    (position) => {
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      if (position.coords.latitude === desLat) {
        navigator.geolocation.clearWatch(id);
      }
    },
    (err) => {
      console.log(err);
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
  );
  }
  
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  
  }

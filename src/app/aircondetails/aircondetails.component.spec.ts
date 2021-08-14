import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircondetailsComponent } from './aircondetails.component';

describe('AircondetailsComponent', () => {
  let component: AircondetailsComponent;
  let fixture: ComponentFixture<AircondetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AircondetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AircondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashingmachinedetailsComponent } from './washingmachinedetails.component';

describe('WashingmachinedetailsComponent', () => {
  let component: WashingmachinedetailsComponent;
  let fixture: ComponentFixture<WashingmachinedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WashingmachinedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WashingmachinedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

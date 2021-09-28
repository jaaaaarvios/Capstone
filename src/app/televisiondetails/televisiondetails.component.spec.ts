import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelevisiondetailsComponent } from './televisiondetails.component';

describe('TelevisiondetailsComponent', () => {
  let component: TelevisiondetailsComponent;
  let fixture: ComponentFixture<TelevisiondetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelevisiondetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelevisiondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

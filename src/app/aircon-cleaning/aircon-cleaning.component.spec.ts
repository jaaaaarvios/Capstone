import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirconCleaningComponent } from './aircon-cleaning.component';

describe('AirconCleaningComponent', () => {
  let component: AirconCleaningComponent;
  let fixture: ComponentFixture<AirconCleaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirconCleaningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirconCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

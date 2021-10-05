import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplianceCleaningComponent } from './appliance-cleaning.component';

describe('ApplianceCleaningComponent', () => {
  let component: ApplianceCleaningComponent;
  let fixture: ComponentFixture<ApplianceCleaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplianceCleaningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplianceCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashingmachineCleaningComponent } from './washingmachine-cleaning.component';

describe('WashingmachineCleaningComponent', () => {
  let component: WashingmachineCleaningComponent;
  let fixture: ComponentFixture<WashingmachineCleaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WashingmachineCleaningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WashingmachineCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

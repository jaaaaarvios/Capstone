import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairFeeComponent } from './repair-fee.component';

describe('RepairFeeComponent', () => {
  let component: RepairFeeComponent;
  let fixture: ComponentFixture<RepairFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairFeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

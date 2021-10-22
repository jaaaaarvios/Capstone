import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallFeeWashingComponent } from './install-fee-washing.component';

describe('InstallFeeWashingComponent', () => {
  let component: InstallFeeWashingComponent;
  let fixture: ComponentFixture<InstallFeeWashingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstallFeeWashingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallFeeWashingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

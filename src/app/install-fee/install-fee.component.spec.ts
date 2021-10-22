import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallFeeComponent } from './install-fee.component';

describe('InstallFeeComponent', () => {
  let component: InstallFeeComponent;
  let fixture: ComponentFixture<InstallFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstallFeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

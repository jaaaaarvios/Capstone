import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashingmachineInstallComponent } from './washingmachine-install.component';

describe('WashingmachineInstallComponent', () => {
  let component: WashingmachineInstallComponent;
  let fixture: ComponentFixture<WashingmachineInstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WashingmachineInstallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WashingmachineInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

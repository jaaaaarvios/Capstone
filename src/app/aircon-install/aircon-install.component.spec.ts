import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirconInstallComponent } from './aircon-install.component';

describe('AirconInstallComponent', () => {
  let component: AirconInstallComponent;
  let fixture: ComponentFixture<AirconInstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirconInstallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirconInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

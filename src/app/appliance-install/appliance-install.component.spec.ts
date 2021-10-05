import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplianceInstallComponent } from './appliance-install.component';

describe('ApplianceInstallComponent', () => {
  let component: ApplianceInstallComponent;
  let fixture: ComponentFixture<ApplianceInstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplianceInstallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplianceInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

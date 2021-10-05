import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrigeratorInstallComponent } from './refrigerator-install.component';

describe('RefrigeratorInstallComponent', () => {
  let component: RefrigeratorInstallComponent;
  let fixture: ComponentFixture<RefrigeratorInstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefrigeratorInstallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefrigeratorInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

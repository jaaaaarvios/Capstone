import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelevisionInstallComponent } from './television-install.component';

describe('TelevisionInstallComponent', () => {
  let component: TelevisionInstallComponent;
  let fixture: ComponentFixture<TelevisionInstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelevisionInstallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelevisionInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

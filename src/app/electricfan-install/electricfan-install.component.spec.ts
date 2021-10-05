import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricfanInstallComponent } from './electricfan-install.component';

describe('ElectricfanInstallComponent', () => {
  let component: ElectricfanInstallComponent;
  let fixture: ComponentFixture<ElectricfanInstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricfanInstallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricfanInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

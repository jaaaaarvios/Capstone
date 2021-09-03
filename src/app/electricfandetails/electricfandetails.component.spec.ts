import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricfandetailsComponent } from './electricfandetails.component';

describe('ElectricfandetailsComponent', () => {
  let component: ElectricfandetailsComponent;
  let fixture: ComponentFixture<ElectricfandetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricfandetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricfandetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

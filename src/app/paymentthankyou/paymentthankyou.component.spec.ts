import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentthankyouComponent } from './paymentthankyou.component';

describe('PaymentthankyouComponent', () => {
  let component: PaymentthankyouComponent;
  let fixture: ComponentFixture<PaymentthankyouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentthankyouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentthankyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

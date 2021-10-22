import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningFeeComponent } from './cleaning-fee.component';

describe('CleaningFeeComponent', () => {
  let component: CleaningFeeComponent;
  let fixture: ComponentFixture<CleaningFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CleaningFeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CleaningFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

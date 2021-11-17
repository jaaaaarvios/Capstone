import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsummaryEditComponent } from './bookingsummary-edit.component';

describe('BookingsummaryEditComponent', () => {
  let component: BookingsummaryEditComponent;
  let fixture: ComponentFixture<BookingsummaryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingsummaryEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsummaryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

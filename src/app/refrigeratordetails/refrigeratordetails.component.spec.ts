import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrigeratordetailsComponent } from './refrigeratordetails.component';

describe('RefrigeratordetailsComponent', () => {
  let component: RefrigeratordetailsComponent;
  let fixture: ComponentFixture<RefrigeratordetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefrigeratordetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefrigeratordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

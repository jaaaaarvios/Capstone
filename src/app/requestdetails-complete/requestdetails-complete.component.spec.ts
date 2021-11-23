import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestdetailsCompleteComponent } from './requestdetails-complete.component';

describe('RequestdetailsCompleteComponent', () => {
  let component: RequestdetailsCompleteComponent;
  let fixture: ComponentFixture<RequestdetailsCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestdetailsCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestdetailsCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

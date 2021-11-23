import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestdetailsPendingComponent } from './requestdetails-pending.component';

describe('RequestdetailsPendingComponent', () => {
  let component: RequestdetailsPendingComponent;
  let fixture: ComponentFixture<RequestdetailsPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestdetailsPendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestdetailsPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

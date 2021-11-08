import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCompleteComponent } from './request-complete.component';

describe('RequestCompleteComponent', () => {
  let component: RequestCompleteComponent;
  let fixture: ComponentFixture<RequestCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestdetailsAdminComponent } from './requestdetails-admin.component';

describe('RequestdetailsAdminComponent', () => {
  let component: RequestdetailsAdminComponent;
  let fixture: ComponentFixture<RequestdetailsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestdetailsAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestdetailsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

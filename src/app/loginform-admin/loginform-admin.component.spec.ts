import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginformAdminComponent } from './loginform-admin.component';

describe('LoginformAdminComponent', () => {
  let component: LoginformAdminComponent;
  let fixture: ComponentFixture<LoginformAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginformAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginformAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

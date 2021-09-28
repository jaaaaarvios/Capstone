import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtechComponent } from './addtech.component';

describe('AddtechComponent', () => {
  let component: AddtechComponent;
  let fixture: ComponentFixture<AddtechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

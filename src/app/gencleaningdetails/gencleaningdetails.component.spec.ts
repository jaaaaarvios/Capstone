import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GencleaningdetailsComponent } from './gencleaningdetails.component';

describe('GencleaningdetailsComponent', () => {
  let component: GencleaningdetailsComponent;
  let fixture: ComponentFixture<GencleaningdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GencleaningdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GencleaningdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelevisionCleaningComponent } from './television-cleaning.component';

describe('TelevisionCleaningComponent', () => {
  let component: TelevisionCleaningComponent;
  let fixture: ComponentFixture<TelevisionCleaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelevisionCleaningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelevisionCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

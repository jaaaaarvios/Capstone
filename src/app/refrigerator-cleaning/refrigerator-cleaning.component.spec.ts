import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrigeratorCleaningComponent } from './refrigerator-cleaning.component';

describe('RefrigeratorCleaningComponent', () => {
  let component: RefrigeratorCleaningComponent;
  let fixture: ComponentFixture<RefrigeratorCleaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefrigeratorCleaningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefrigeratorCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

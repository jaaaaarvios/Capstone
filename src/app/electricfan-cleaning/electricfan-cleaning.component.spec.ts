import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricfanCleaningComponent } from './electricfan-cleaning.component';

describe('ElectricfanCleaningComponent', () => {
  let component: ElectricfanCleaningComponent;
  let fixture: ComponentFixture<ElectricfanCleaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricfanCleaningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricfanCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

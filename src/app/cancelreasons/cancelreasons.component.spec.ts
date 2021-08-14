import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelreasonsComponent } from './cancelreasons.component';

describe('CancelreasonsComponent', () => {
  let component: CancelreasonsComponent;
  let fixture: ComponentFixture<CancelreasonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelreasonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelreasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

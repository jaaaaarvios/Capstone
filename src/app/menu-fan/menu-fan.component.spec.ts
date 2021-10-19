import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFanComponent } from './menu-fan.component';

describe('MenuFanComponent', () => {
  let component: MenuFanComponent;
  let fixture: ComponentFixture<MenuFanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuFanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

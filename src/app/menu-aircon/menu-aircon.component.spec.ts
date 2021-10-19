import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAirconComponent } from './menu-aircon.component';

describe('MenuAirconComponent', () => {
  let component: MenuAirconComponent;
  let fixture: ComponentFixture<MenuAirconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAirconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAirconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

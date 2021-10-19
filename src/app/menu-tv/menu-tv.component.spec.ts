import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTvComponent } from './menu-tv.component';

describe('MenuTvComponent', () => {
  let component: MenuTvComponent;
  let fixture: ComponentFixture<MenuTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuTvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

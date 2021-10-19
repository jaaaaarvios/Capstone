import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuWashingComponent } from './menu-washing.component';

describe('MenuWashingComponent', () => {
  let component: MenuWashingComponent;
  let fixture: ComponentFixture<MenuWashingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuWashingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuWashingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

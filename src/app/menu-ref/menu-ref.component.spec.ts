import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRefComponent } from './menu-ref.component';

describe('MenuRefComponent', () => {
  let component: MenuRefComponent;
  let fixture: ComponentFixture<MenuRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuRefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

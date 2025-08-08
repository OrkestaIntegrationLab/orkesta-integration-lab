import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelMenuItemComponent } from './panel-menu-item.component';

describe('PanelMenuItemComponent', () => {
  let component: PanelMenuItemComponent;
  let fixture: ComponentFixture<PanelMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelMenuItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

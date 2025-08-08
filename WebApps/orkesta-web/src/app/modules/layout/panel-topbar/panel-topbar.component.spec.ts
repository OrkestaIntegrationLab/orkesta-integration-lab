import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelTopbarComponent } from './panel-topbar.component';

describe('PanelTopbarComponent', () => {
  let component: PanelTopbarComponent;
  let fixture: ComponentFixture<PanelTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelTopbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

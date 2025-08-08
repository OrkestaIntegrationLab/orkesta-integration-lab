import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelConfigComponent } from './panel-config.component';

describe('PanelConfigComponent', () => {
  let component: PanelConfigComponent;
  let fixture: ComponentFixture<PanelConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

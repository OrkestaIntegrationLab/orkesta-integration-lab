import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelRightTasksComponent } from './panel-right-tasks.component';

describe('PanelRightTasksComponent', () => {
  let component: PanelRightTasksComponent;
  let fixture: ComponentFixture<PanelRightTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelRightTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelRightTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

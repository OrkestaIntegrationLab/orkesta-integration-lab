import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-panel-right',
  templateUrl: './panel-right.component.html',
  styleUrls: ['./panel-right.component.scss']
})
export class PanelRightComponent implements OnInit {

  currentDate = Date()
  constructor(public readonly app: LayoutComponent) { }

  ngOnInit(): void {
  }

}

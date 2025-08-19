import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-device-type-panel',
  templateUrl: './device-type-panel.component.html',
  styleUrls: ['./device-type-panel.component.scss']
})
export class DeviceTypePanelComponent implements OnInit {
 @Input("showDialog") showDialog: boolean = true;
  @Output() showDialogChange = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }


    hideDialog(): void {
    this.showDialog = false;
    this.showDialogChange.emit(this.showDialog);
   /* this.submitted = false;
    this._dataDeviceType = new DeviceType();
    this._dataDeviceType.id = -1;
    this._dataDeviceType.active = true;*/
  }
}

import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device';
import { DeviceService } from './device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  devices: Device[] = [];
  newDevice: Device = new Device();
 
  constructor(private _deviceService: DeviceService) { }

  ngOnInit(): void {
  }


    loadDevices() {
    this._deviceService.getAll().subscribe(data => {
      this.devices = data;
    });
  }

   addDevice() {
    if (!this.newDevice.name) return;
    this._deviceService.create(this.newDevice).subscribe(() => {
      this.newDevice = new Device;
      this.loadDevices();
    });
  }

}

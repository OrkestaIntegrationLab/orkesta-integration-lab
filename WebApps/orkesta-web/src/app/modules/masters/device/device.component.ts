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



}

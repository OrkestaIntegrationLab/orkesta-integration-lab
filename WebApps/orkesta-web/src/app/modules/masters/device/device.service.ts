import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Device } from 'src/app/models/device';
import { HttpHelpersService } from '../../common/services/http-helpers.service';
import { DeviceFilter } from 'src/app/models/device-filter';

@Injectable({ providedIn: 'root' })
export class DeviceService {
  
 
  _deviceList:Device[];

  private baseUrl = ' https://localhost:7272/device/';

  constructor(private _httpClient: HttpClient, private _httpHelpersService: HttpHelpersService) {}

   //GET
   getDeviceList(filters: DeviceFilter) {
     return this._httpClient.get<Device[]>(this.baseUrl, {
         params: this._httpHelpersService.getHttpParamsFromPlainObject(filters)
       });
   }
   
   //POST
   UpdateDevice(device: Device) {
        return this._httpClient.post<number>(this.baseUrl, device);
}


}
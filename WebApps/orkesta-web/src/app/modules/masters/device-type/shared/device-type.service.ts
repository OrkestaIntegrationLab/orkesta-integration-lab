import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeviceType } from 'src/app/models/device-type';
import { DeviceTypeFilter } from 'src/app/models/device-type-filter';
import { HttpHelpersService } from 'src/app/modules/common/services/http-helpers.service';

@Injectable({
  providedIn: 'root'
})
export class DeviceTypeService {
  _deviceTypeList:DeviceType[];
  
  private baseUrl = 'https://localhost:7272/DeviceType/';
 
   constructor(private _httpClient: HttpClient, 
               private _httpHelpersService: HttpHelpersService) { }
 
 
 
   getDeviceTypeList(filters: DeviceTypeFilter) {
     return this._httpClient.get<DeviceType[]>(this.baseUrl, {
         params: this._httpHelpersService.getHttpParamsFromPlainObject(filters)
       });
   }
 
     create(device: DeviceType): Observable<DeviceType> {
       return this._httpClient.post<DeviceType>(this.baseUrl, device);
     }
}

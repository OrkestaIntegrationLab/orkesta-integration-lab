import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Device } from 'src/app/models/device';
import { HttpHelpersService } from '../../common/services/http-helpers.service';

@Injectable({ providedIn: 'root' })
export class DeviceService {
  
  private baseUrl = ' https://localhost:7272/api/device/';

  constructor(private _httpClient: HttpClient, private _httpHelpersService: HttpHelpersService) {}

  getAll(): Observable<Device[]> {
    return this._httpClient.get<Device[]>(this.baseUrl);
  }

  create(device: Device): Observable<Device> {
    return this._httpClient.post<Device>(this.baseUrl, device);
  }

  /*getWeatherList(filters: WeatherForecastFilter = new WeatherForecastFilter()) {
   debugger;
    return this._httpClient.get<WeatherForecast[]>(this.baseUrl, {
        params: this._httpHelpersService.getHttpParamsFromPlainObject(filters)
      });
  }*/

}
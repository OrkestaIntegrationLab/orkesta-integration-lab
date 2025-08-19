import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Weather } from 'src/app/models/weather';
import { WeatherFilter } from 'src/app/models/weather-filter';
import { HttpHelpersService } from '../../common/services/http-helpers.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private baseUrl = ' https://localhost:7272/WeatherForecast/';

  constructor(private _httpClient: HttpClient, 
              private _httpHelpersService: HttpHelpersService) { }



  getWeatherList(filters: WeatherFilter = new WeatherFilter()) {
    return this._httpClient.get<Weather[]>(this.baseUrl, {
        params: this._httpHelpersService.getHttpParamsFromPlainObject(filters)
      });
  }

    create(device: Weather): Observable<Weather> {
      return this._httpClient.post<Weather>(this.baseUrl, device);
    }

}

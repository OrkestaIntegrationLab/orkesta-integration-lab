import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherForecast } from 'src/app/models/masters/weather-forecast';
import { WeatherForecastFilter } from 'src/app/models/masters/weather-forecast-filter';
import { HttpHelpersService } from 'src/app/modules/common/services/http-helpers.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  _weatherList: WeatherForecast[] = [];

  constructor(private _httpClient: HttpClient, private _httpHelpersService: HttpHelpersService) { }

  getWeatherList(filters: WeatherForecastFilter = new WeatherForecastFilter()) {
   debugger;
    return this._httpClient.get<WeatherForecast[]>(`${environment.API_BASE_URL_GENERAL_MASTERS}/WeatherForecast/`, {
        params: this._httpHelpersService.getHttpParamsFromPlainObject(filters)
      });
  }

}

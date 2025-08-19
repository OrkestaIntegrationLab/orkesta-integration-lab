import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  weathers: Weather[] = [];
  newWeather: Weather = new Weather();
 visible:boolean=false;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit(): void {
    debugger;
    this.loadWeather();
  }

    loadWeather() {
      debugger
      this._weatherService.getWeatherList().subscribe(data => {
        this.weathers = data;
        console.log('Weather data loaded:', data);
        console.log(this.weathers);
      });
    }
  
    addWeather() {
      if (!this.newWeather.summary) return;
      this._weatherService.create(this.newWeather).subscribe(() => {
        this.newWeather = new Weather();
        this.loadWeather();
      });
    }

}

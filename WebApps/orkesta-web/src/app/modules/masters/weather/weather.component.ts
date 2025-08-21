import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather';
import { WeatherService } from './weather.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { BreadcrumbService } from 'src/app/design/breadcrumb.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  weathers: Weather[] = [];
  newWeather: Weather = new Weather();
  visible:boolean=false;
  loading: boolean = false;

  constructor(private _weatherService: WeatherService,
               private _messageService: MessageService, private breadcrumbService: BreadcrumbService ,
                              ) {

                      this.breadcrumbService.setItems([
        { label: 'Maestros generales' },
        { label: 'Clima', routerLink: ['/devicetype-list'] }
      ]);
                }

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
      }, (error: HttpErrorResponse) => {
        this.loading = false;
        this._messageService.add({ severity: 'error', summary: 'Consulta', detail: "Ha ocurrido un error al cargar listadp de climas" });
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

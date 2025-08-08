import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MastersRoutingModule } from './masters-routing.module';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { WeatherForeCastListComponent } from './weather-forecast/weather-fore-cast-list/weather-fore-cast-list.component';


@NgModule({
  declarations: [
    WeatherForecastComponent,
    WeatherForeCastListComponent
  ],
  imports: [
    CommonModule,
    MastersRoutingModule
  ]
})
export class MastersModule { }

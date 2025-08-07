import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MastersRoutingModule } from './masters-routing.module';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';


@NgModule({
  declarations: [
    WeatherForecastComponent
  ],
  imports: [
    CommonModule,
    MastersRoutingModule
  ]
})
export class MastersModule { }

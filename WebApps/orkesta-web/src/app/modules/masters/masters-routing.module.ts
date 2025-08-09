import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherForeCastListComponent } from './weather-forecast/weather-fore-cast-list/weather-fore-cast-list.component';
import { LayoutComponent } from '../layout/layout/layout.component';

const routes: Routes = [
  {
    path: 'masters',
    component: LayoutComponent,
    children:[
     { path: 'weather-list', component: WeatherForeCastListComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MastersRoutingModule { }

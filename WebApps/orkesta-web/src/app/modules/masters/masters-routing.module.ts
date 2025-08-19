import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceComponent } from './device/device.component';
import { DeviceTypeComponent } from './device-type/device-type.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  { path: 'device', component: DeviceComponent },
  { path: 'device-type', component: DeviceTypeComponent },
  { path: 'weather', component: WeatherComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MastersRoutingModule { }

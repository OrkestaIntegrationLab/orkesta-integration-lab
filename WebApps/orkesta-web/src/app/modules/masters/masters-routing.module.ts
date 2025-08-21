import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceComponent } from './device/device.component';
import { DeviceTypeComponent } from './device-type/device-type.component';
import { WeatherComponent } from './weather/weather.component';
import { DeviceTypeListComponent } from './device-type/device-type-list/device-type-list.component';

const routes: Routes = [
  { path: 'device', component: DeviceComponent },
  { path: 'device-type', component: DeviceTypeListComponent },
  { path: 'weather', component: WeatherComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MastersRoutingModule { }

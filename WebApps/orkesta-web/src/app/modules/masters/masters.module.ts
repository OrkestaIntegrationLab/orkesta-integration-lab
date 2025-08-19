import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MastersRoutingModule } from './masters-routing.module';
import { DeviceComponent } from './device/device.component';
import { DeviceTypeComponent } from './device-type/device-type.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './weather/weather.component';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { SidebarModule } from 'primeng/sidebar';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [DeviceComponent, DeviceTypeComponent,WeatherComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MastersRoutingModule,
    ButtonModule,
    PanelModule,
    SidebarModule,
    TableModule
    
  ]
})
export class MastersModule { }

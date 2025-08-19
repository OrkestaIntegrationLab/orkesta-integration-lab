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
import { DeviceTypeListComponent } from './device-type/device-type-list/device-type-list.component';
import { PrimengModule } from '../primeng/primeng.module';
import { DeviceTypeFilterPanelComponent } from './device-type/device-type-list/device-type-filter-panel/device-type-filter-panel.component';


@NgModule({
  declarations: [DeviceComponent, DeviceTypeComponent,WeatherComponent, DeviceTypeListComponent, DeviceTypeFilterPanelComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MastersRoutingModule,
    ButtonModule,
    PanelModule,
    SidebarModule,
    TableModule,
    PrimengModule
    
  ]
})
export class MastersModule { }

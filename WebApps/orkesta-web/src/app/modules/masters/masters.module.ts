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
import { ToastModule } from 'primeng/toast';
import { DeviceTypePanelComponent } from './device-type/device-type-panel/device-type-panel.component';
import { BrandListComponent } from './brand/brand-list/brand-list.component';
import { BrandPanelComponent } from './brand/brand-panel/brand-panel.component';
import { BrandFilterPanelComponent } from './brand/brand-list/brand-filter-panel/brand-filter-panel.component';
import { DeviceListComponent } from './device/device-list/device-list.component';
import { DevicePanelComponent } from './device/device-panel/device-panel.component';
import { DeviceFilterPanelComponent } from './device/device-list/device-filter-panel/device-filter-panel.component';


@NgModule({
  declarations: [DeviceComponent, 
                DeviceTypeComponent,
                WeatherComponent, 
                DeviceTypeListComponent, 
                DeviceTypeFilterPanelComponent, 
                DeviceTypePanelComponent, BrandListComponent, BrandPanelComponent, BrandFilterPanelComponent, DeviceListComponent, DevicePanelComponent, DeviceFilterPanelComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MastersRoutingModule,
    ButtonModule,
    PanelModule,
    SidebarModule,
    TableModule,
    PrimengModule,
    ToastModule
    
  ]
})
export class MastersModule { }

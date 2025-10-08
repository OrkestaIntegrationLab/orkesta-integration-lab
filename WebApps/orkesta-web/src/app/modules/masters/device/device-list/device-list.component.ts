import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BreadcrumbService } from 'src/app/design/breadcrumb.service';
import { Device } from 'src/app/models/device';
import { DeviceFilter } from 'src/app/models/device-filter';
import { DeviceService } from '../device.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {

  showFilters:boolean = false;
  showDialog:boolean = false;
  loading: boolean = false;
  deviceFilters: DeviceFilter = new DeviceFilter();
  _DeviceViewModel:Device;


  constructor(
         private _breadcrumbService: BreadcrumbService ,
         private _messageService: MessageService,
         public _deviceService: DeviceService ) {
          
      this._breadcrumbService.setItems([
        { label: 'Maestros generales' },
        { label: 'Dispositivos', routerLink: ['/device-list'] }
      ]);

  }

  ngOnInit(): void {
    this.search();
  }


search() {
      this.loading = true;
      this._deviceService.getDeviceList(this.deviceFilters).subscribe((data: Device[]) => {
        this._deviceService._deviceList= data;
        this.loading = false;
      }, (error: HttpErrorResponse) => {
          this.loading = false;
          console.error('Error al cargar los dispositivos', error);
          this._messageService.add({ severity: 'error', summary: 'Consulta', detail: "Ha ocurrido un error al cargar los dispositivos" });
      });
    }


  openNew() {
    this._DeviceViewModel = new Device;
    this.showDialog = true;
  }

    onEdit(device : Device) {
    this._DeviceViewModel = new Device;
    this._DeviceViewModel.idDevice = device.idDevice;
    this._DeviceViewModel.idBrand = device.idBrand;
    this._DeviceViewModel.quantity = device.quantity;
    this._DeviceViewModel.idDeviceType = device.idDeviceType;
    this._DeviceViewModel.deviceName = device.deviceName;
    this._DeviceViewModel.abreviation = device.abreviation;
    this._DeviceViewModel.indActive = device.indActive;
    this.showDialog = true;
  }


}

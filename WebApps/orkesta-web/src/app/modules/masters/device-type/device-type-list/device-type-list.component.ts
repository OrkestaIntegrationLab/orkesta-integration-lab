import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BreadcrumbService } from 'src/app/design/breadcrumb.service';
import { DeviceTypeFilter } from 'src/app/models/device-type-filter';
import { DeviceTypeService } from '../shared/device-type.service';
import { DeviceType } from 'src/app/models/device-type';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-device-type-list',
  templateUrl: './device-type-list.component.html',
  styleUrls: ['./device-type-list.component.scss']
})
export class DeviceTypeListComponent implements OnInit {
  showFilters:boolean = false;
  showDialog:boolean = false;
  loading: boolean = false;
  deviceTypeFilters: DeviceTypeFilter = new DeviceTypeFilter();
  _DeviceTypeViewModel:DeviceType;
  constructor(
       private _breadcrumbService: BreadcrumbService ,
       private _messageService: MessageService,
       public _deviceTypeService: DeviceTypeService 
  ) { 

        this._breadcrumbService.setItems([
        { label: 'Maestros generales' },
        { label: 'Tipos de dispositivos', routerLink: ['/devicetype-list'] }
      ]);

  }

  ngOnInit(): void {
    this.search();
  }

    search() {
    this.loading = true;
    this._deviceTypeService.getDeviceTypeList(this.deviceTypeFilters).subscribe((data: DeviceType[]) => {
      this._deviceTypeService._deviceTypeList= data;
      this.loading = false;
    }, (error: HttpErrorResponse) => {
        this.loading = false;
        console.error('Error al cargar los tipos de dispositivos', error);
        this._messageService.add({ severity: 'error', summary: 'Consulta', detail: "Ha ocurrido un error al cargar los tipos de dispositivos" });
    });
  }

  openNew() {
    this._DeviceTypeViewModel = new DeviceType;;
    this.showDialog = true;
  }

    onEdit(devicetype : DeviceType) {
    this._DeviceTypeViewModel = new DeviceType;
    this._DeviceTypeViewModel.idDeviceType = devicetype.idDeviceType;
    this._DeviceTypeViewModel.deviceTypeName = devicetype.deviceTypeName;
    this._DeviceTypeViewModel.abreviature = devicetype.abreviature;
    this._DeviceTypeViewModel.indActive = devicetype.indActive;
    this.showDialog = true;
  }


}

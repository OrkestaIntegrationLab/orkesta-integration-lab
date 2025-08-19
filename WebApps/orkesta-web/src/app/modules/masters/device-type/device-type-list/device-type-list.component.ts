import { Component, OnInit } from '@angular/core';
import { DeviceTypeFilter } from 'src/app/models/device-type-filter';

@Component({
  selector: 'app-device-type-list',
  templateUrl: './device-type-list.component.html',
  styleUrls: ['./device-type-list.component.scss']
})
export class DeviceTypeListComponent implements OnInit {
  showFilters:boolean=true;
  showDialog:boolean=false;
  loading: boolean = false;
  deviceTypeFilters: DeviceTypeFilter = new DeviceTypeFilter();
  constructor() { }

  ngOnInit(): void {
  }

    search() {
      debugger;
      console.log("Searching with filters:", this.deviceTypeFilters);
    this.loading = true;
    /*this._DeviceTypeService.getdeviceTypeList(this.deviceTypeFilters).subscribe((data: DeviceType[]) => {
      this._DeviceTypeService._deviceTypeList= data;
      this.loading = false;
    }, (error: HttpErrorResponse) => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Consulta', detail: "Ha ocurrido un error al cargar los tipos de dispositivos" });
    });*/
  }


}

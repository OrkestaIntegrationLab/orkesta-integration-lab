import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { DeviceFilter } from 'src/app/models/device-filter';

@Component({
  selector: 'app-device-filter-panel',
  templateUrl: './device-filter-panel.component.html',
  styleUrls: ['./device-filter-panel.component.scss']
})
export class DeviceFilterPanelComponent implements OnInit {


    @Input() expanded: boolean = false;
    @Input("filters") filters: DeviceFilter;
    @Output() filtersChange = new EventEmitter<DeviceFilter>();
    @Input("loading") loading: boolean = false;
    @Input() cboactive: number;
    @Output("onSearch") onSearch = new EventEmitter<DeviceFilter>();

    deviceTypelist: SelectItem[] = [];
    brandlist: SelectItem[] = [];
    statuslist: SelectItem[] = 
      [
          { label: 'Todos', value: '-1' },
          { label: 'Activo', value: '1'},
          { label: 'Inactivo', value: '0'}
      ];
    


  constructor() { }


  ngOnInit(): void {
    this.filters.indActive = -1;
  }

    search() {
    this.filtersChange.emit(this.filters);
    this.onSearch.emit(this.filters);
  }

  clearFilters() {
    this.filters.abreviation="";
    this.filters.indActive= -1;
    this.filters.deviceName="";
    //Limpia los filtros
  }


}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debug } from 'console';
import { SelectItem } from 'primeng/api';
import { DeviceTypeFilter } from 'src/app/models/device-type-filter';

@Component({
  selector: 'app-device-type-filter-panel',
  templateUrl: './device-type-filter-panel.component.html',
  styleUrls: ['./device-type-filter-panel.component.scss']
})
export class DeviceTypeFilterPanelComponent implements OnInit {
  @Input() expanded: boolean = false;
  @Input("filters") filters: DeviceTypeFilter;
  @Output() filtersChange = new EventEmitter<DeviceTypeFilter>();
  @Input("loading") loading: boolean = false;
  @Input() cboactive: number;
  @Output("onSearch") onSearch = new EventEmitter<DeviceTypeFilter>();
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
      debugger;
    this.filtersChange.emit(this.filters);
    console.log("search", this.filters);
    this.onSearch.emit(this.filters);
  }

  clearFilters() {
    this.filters.abreviature="";
    this.filters.indActive= -1;
    this.filters.deviceType="";
    //Limpia los filtros
  }

}

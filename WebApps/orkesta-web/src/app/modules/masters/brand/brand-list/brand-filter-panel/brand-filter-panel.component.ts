import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { BrandFilter } from 'src/app/models/brand-filter';

@Component({
  selector: 'app-brand-filter-panel',
  templateUrl: './brand-filter-panel.component.html',
  styleUrls: ['./brand-filter-panel.component.scss']
})
export class BrandFilterPanelComponent implements OnInit {
 
 @Input() expanded: boolean = false;
 @Input("filters") filters : BrandFilter;
 @Output() filtersChange = new EventEmitter<BrandFilter>();
 @Input("loading") loading: boolean = false;
 @Input() cboactive: number
 @Output("onSearch") onSearch = new EventEmitter<BrandFilter>();

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

  search(){
    this.filtersChange.emit(this.filters);
    this.onSearch.emit(this.filters)
  }

  clearFilters(){
    this.filters.abreviature="";
    this.filters.indActive= -1;
    this.filters.brandName="";
    //Limpia los filtros
  }

}

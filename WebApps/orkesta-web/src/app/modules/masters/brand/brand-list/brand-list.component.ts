import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BreadcrumbService } from 'src/app/design/breadcrumb.service';
import { Brand } from 'src/app/models/brand';
import { BrandFilter } from 'src/app/models/brand-filter';
import { BrandService } from '../shared/brand.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {

  showFilters:boolean = false;
  showDialog:boolean = false;
  loading: boolean = false;
  brandFilters: BrandFilter = new BrandFilter();
  _BrandViewModel:Brand;


  constructor(  private _breadcrumbService: BreadcrumbService ,
                private _messageService: MessageService,
                public _brandService: BrandService
  ) { 

    this._breadcrumbService.setItems([
        { label: 'Maestros generales' },
        { label: 'Marcas', routerLink: ['/brand-list'] }
      ]);
  }


  ngOnInit(): void {
    this.search();
  }

  search(){
    this.loading = true;
    this._brandService.getBrandList(this.brandFilters).subscribe((data: Brand[]) => {
    this._brandService._brandList= data;
    this.loading = false;
      console.log('Marcas', data);
  }, (error: HttpErrorResponse) => {
          this.loading = false;
          console.error('Error al cargar las marcas', error);
          this._messageService.add({ severity: 'error', summary: 'Consulta', detail: "Ha ocurrido un error al cargar las marcas" });
      });
}

  openNew() {
    this._BrandViewModel = new Brand;;
    this.showDialog = true;
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';
import { Brand } from 'src/app/models/brand';
import { BrandFilter } from 'src/app/models/brand-filter';
import { Validations } from 'src/app/modules/common/utils/validations';
import { BrandService } from '../shared/brand.service';

@Component({
  selector: 'app-brand-panel',
  templateUrl: './brand-panel.component.html',
  styleUrls: ['./brand-panel.component.scss']
})
export class BrandPanelComponent implements OnInit {
  submitted: boolean;
 _validations : Validations = new Validations();

 @Input("showDialog") showDialog: boolean = true;
 @Input("_data") _data : Brand;
 @Input("filters") filters : BrandFilter;
 @Output() showDialogChange = new EventEmitter<boolean>();

  statuslist: SelectItem[] = [ { 
     label: 'Activo', value: true},
   { label: 'Inactivo', value: false}];

  constructor(
      private _messageService: MessageService,
      public _brandService: BrandService
  ) { }

  ngOnInit(): void {
  }

  saveBrand() {
    this.submitted = true;
    this._data.isdisabled = true;

    if (this._data.abreviature != "")
      this._data.abreviature = this._data.abreviature.toLocaleUpperCase();

    if (this._data.brandName != "" && this._data.brandName.trim()) {
      if (this._data.brandName.trim().toLocaleUpperCase() !== this._data.abreviature.trim().toLocaleUpperCase()) {
        this.Save()
      }
    }
    this._data.isdisabled = false;
  }

  Save() {
    this._brandService.UpdateBrand(this._data).subscribe((data) => {

      if (data> 0) {

             this._messageService.add({ severity: 'success', summary: 'Guardado', detail: "Guardado exitoso" });
             this.showDialog = false;
             this.showDialogChange.emit(this.showDialog);
             this._data = new Brand();
             this._data.indActive = true;
             this._brandService.getBrandList(this.filters).subscribe((data: Brand[]) => {
             this._brandService._brandList = data;
           
            });
            
            this.submitted = false;
            
            
          }else if(data == -1) {
            this._messageService.add({ severity: 'error', summary: 'Error', detail: "El nombre ya se encuentra registrado." });
          } 
          else if(data == -2) {
            this._messageService.add({ severity: 'error', summary: 'Error', detail: "La abreviatura ya se encuentra registrada." });
          }
          else if(data == -3) {
            this._messageService.add({ severity: 'error', summary: 'Error', detail: "Este registro no existe" });
          }
          else {
            this._messageService.add({ severity: 'error', summary: 'Error', detail: "Ha ocurrido un error al guardar los datos" });
          }
        }, () => {
          this._messageService.add({ severity: 'error', summary: 'Error', detail: "Ha ocurrido un error al guardar los datos" });
        });
}


  hideDialog(): void {
    this.showDialog = false;
    this.showDialogChange.emit(this.showDialog);
    this.submitted = false;
    this._data = new Brand();
    this._data.idBrand = -1;
    this._data.indActive = true;
  }

}

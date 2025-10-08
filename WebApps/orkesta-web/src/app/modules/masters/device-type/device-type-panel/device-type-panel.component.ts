import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';
import { DeviceType } from 'src/app/models/device-type';
import { DeviceTypeFilter } from 'src/app/models/device-type-filter';
import { Validations } from 'src/app/modules/common/utils/validations';
import { DeviceTypeService } from '../shared/device-type.service';

@Component({
  selector: 'app-device-type-panel',
  templateUrl: './device-type-panel.component.html',
  styleUrls: ['./device-type-panel.component.scss']
})
export class DeviceTypePanelComponent implements OnInit {
  submitted: boolean;
  _validations : Validations = new Validations();
 
 @Input("showDialog") showDialog: boolean = true;
 @Input("_data") _data: DeviceType;
 @Input("filters") filters: DeviceTypeFilter;
 @Output() showDialogChange = new EventEmitter<boolean>();
 
  statuslist: SelectItem[] = [ { 
    label: 'Activo', value: true},
  { label: 'Inactivo', value: false}];
  
  constructor(
           private _messageService: MessageService,
           public _deviceTypeService: DeviceTypeService 
  ) { }

   ngOnInit(): void {
    if(this._data.idDeviceType<=0)
       this._data.indActive=true;
  }

  saveDeviceType() 
  {

    this.submitted = true;
    this._data.isdisabled=true;
    
    if(this._data.abreviature!= "")
       this._data.abreviature = this._data.abreviature.toLocaleUpperCase();
    
    if (this._data.deviceTypeName != "" && this._data.deviceTypeName.trim()) {
       if(this._data.deviceTypeName.trim().toLocaleUpperCase() !== this._data.abreviature.trim().toLocaleUpperCase()){
          this.Save()
      }
    }
    this._data.isdisabled=false;
  }

  Save()
  {
    this._deviceTypeService.UpdateDeviceType(this._data).subscribe((data) => {
      
      if (data> 0) {

             this._messageService.add({ severity: 'success', summary: 'Guardado', detail: "Guardado exitoso" });
             this.showDialog = false;
             this.showDialogChange.emit(this.showDialog);
             this._data = new DeviceType();
             this._data.indActive = true;
             this._deviceTypeService.getDeviceTypeList(this.filters).subscribe((data: DeviceType[]) => {
             this._deviceTypeService._deviceTypeList = data;
           
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
    this._data = new DeviceType();
    this._data.idDeviceType = -1;
    this._data.indActive = true;
  }
}

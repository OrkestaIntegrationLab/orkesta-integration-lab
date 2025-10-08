import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';
import { Device } from 'src/app/models/device';
import { DeviceFilter } from 'src/app/models/device-filter';
import { Validations } from 'src/app/modules/common/utils/validations';
import { DeviceService } from '../device.service';
import { DeviceTypeService } from '../../device-type/shared/device-type.service';
import { BrandService } from '../../brand/shared/brand.service';

@Component({
  selector: 'app-device-panel',
  templateUrl: './device-panel.component.html',
  styleUrls: ['./device-panel.component.scss']
})
export class DevicePanelComponent implements OnInit {
    submitted: boolean;
    _validations : Validations = new Validations();
   @Input("showDialog") showDialog: boolean = true;
   @Input("_data") _data: Device;
   @Input("filters") filters: DeviceFilter;
   @Output() showDialogChange = new EventEmitter<boolean>();
   brandsList : SelectItem[];
   deviceTypeList : SelectItem[];
   statuslist: SelectItem[] = [ { 
       label: 'Activo', value: true},
     { label: 'Inactivo', value: false}];

  constructor(  private _messageService: MessageService,
                public _deviceService: DeviceService,
                public _deviceTypeService : DeviceTypeService,
                public _brandService : BrandService ) { }

  ngOnInit(): void {
    this.onloadDropDowns()
      if(this._data.idDevice<=0)
         this._data.indActive=true;
  }


  saveDevice() 
  {
    debugger;
    this.submitted = true;
    this._data.isdisabled=true;
    if(this._data.abreviation!= "")
       this._data.abreviation = this._data.abreviation.toLocaleUpperCase();
    if (this._data.deviceName != "" && this._data.deviceName.trim()) {
       if(this._data.deviceName.trim().toLocaleUpperCase() !== this._data.abreviation.trim().toLocaleUpperCase()){
        if(this._data.idDeviceType>0 && this._data.idBrand>0 && this._data.quantity>=0){
          this.Save();
        }
          
      }
    }
    this._data.isdisabled=false;
  }

    Save()
    {
        debugger;
      this._deviceService.UpdateDevice(this._data).subscribe((data) => {
        
        if (data> 0) {
  
               this._messageService.add({ severity: 'success', summary: 'Guardado', detail: "Guardado exitoso" });
               this.showDialog = false;
               this.showDialogChange.emit(this.showDialog);
               this._data = new Device();
               this._data.indActive = true;
               this._deviceService.getDeviceList(this.filters).subscribe((data: Device[]) => {
               this._deviceService._deviceList = data;
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
        this._data = new Device();
        this._data.idDeviceType = -1;
        this._data.idBrand = -1;
        this._data.idDevice = -1;
        this._data.deviceName = "";
        this._data.abreviation = "";
        this._data.quantity = -1;
        this._data.indActive = true;
 }


 onloadDropDowns(){
 this.onloadDeviceType() 
 this.onloadBrand()
 }

 onloadDeviceType(){
     this._deviceTypeService.getDeviceTypeList( {idDeviceType:-1,indActive:1,deviceType: "",abreviature:""}).subscribe((data)=>{
      this.deviceTypeList = data.sort((a, b) => a.deviceTypeName.localeCompare(b.deviceTypeName)).map<SelectItem>((item)=>({
        label: item.deviceTypeName,
        value: item.idDeviceType
      }));
    });   
 }

  onloadBrand(){
     this._brandService.getBrandList( {idBrand:-1,indActive:1,brandName: "",abreviature:""}).subscribe((data)=>{
      this.brandsList = data.sort((a, b) => a.brandName.localeCompare(b.brandName)).map<SelectItem>((item)=>({
        label: item.brandName,
        value: item.idBrand
      }));
    });   
 }

}

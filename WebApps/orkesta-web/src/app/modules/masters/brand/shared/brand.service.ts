import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandFilter } from 'src/app/models/brand-filter';
import { HttpHelpersService } from 'src/app/modules/common/services/http-helpers.service';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

_brandList: Brand[];

 private baseUrl = 'https://localhost:7272/Brand/';

  constructor(private _httpClient: HttpClient, 
               private _httpHelpersService: HttpHelpersService) { }

  
  getBrandList(filters : BrandFilter){
      return this._httpClient.get<Brand[]>(this.baseUrl, {
         params: this._httpHelpersService.getHttpParamsFromPlainObject(filters)
       });
      }


  UpdateBrand(brand: Brand) {
        return this._httpClient.post<number>(this.baseUrl, brand);
  }
  
}

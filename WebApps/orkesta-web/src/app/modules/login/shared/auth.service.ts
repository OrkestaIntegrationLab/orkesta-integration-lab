import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 private readonly USER_STATE = '_USER_STATE';
  private readonly REMEMBER_ME = '_REMEMBER_ME';
  private readonly ACCESS_STATE = '_ACCESS_STATE';
  private readonly CURRENT_OFFICE = '_CURRENT_OFFICE';
  private readonly LAST_ROUTE = '_LAST_ROUTE';
  private readonly NAME_CURRENT_OFFICE = '_NAME_CURRENT_OFFICE';
  private readonly NAME_CURRENT_COMPANY = '_NAME_CURRENT_COMPANY';
  private readonly KPI_PERMISSIONS = '_KPI_PERMISSIONS';
  private loggedUser: string;
  private apiUrl = `${environment.API_BASE_URL_AUTHENTICATION}/Authentication`;


  constructor(public httpClient: HttpClient) { }

    get rememberMe() {
    return localStorage.getItem(this.REMEMBER_ME) === 'true';
  }

  get idUser() {
    return this.storeUser?.id ?? '';
  }

  get entityName() {
    return this.storeUser?.fullName ?? '';
  }

  get userName() {
    return this.storeUser?.email ?? '';
  }

  get jwt() {
    return this.storeUser?.token ?? '';
  }

  get userType() {
    return this.storeUser?.userType ?? '';
  }
  
  get storeUser() {
    if (this.rememberMe === true) {
      return JSON.parse(localStorage.getItem(this.USER_STATE));
    }
    return JSON.parse(sessionStorage.getItem(this.USER_STATE));
  }

  get currentOffice() {
    return JSON.parse(localStorage.getItem(this.CURRENT_OFFICE))?.idOffice;
    // return JSON.parse(localStorage.getItem(this.CURRENT_OFFICE))?.idOffice ?? -1;
  }
  get currentNameOffice() {
    return JSON.parse(localStorage.getItem(this.NAME_CURRENT_OFFICE))?.nameOffice ?? '';
  }
  get currentNameCompany() {
    return JSON.parse(localStorage.getItem(this.NAME_CURRENT_COMPANY))?.nameCompany ?? '';
  }
  get currentCompany() {
    return JSON.parse(localStorage.getItem(this.CURRENT_OFFICE))?.idCompany;
    // return JSON.parse(localStorage.getItem(this.CURRENT_OFFICE))?.idCompany ?? -1;
  }

  get lastRouteVisited() {
    return JSON.parse(sessionStorage.getItem(this.LAST_ROUTE))?.route ?? '';
  }

  get userImage() {
    return this.storeUser?.imageUrl ?? '';
  }

  get kpiPermissions() {
    return JSON.parse(localStorage.getItem(this.KPI_PERMISSIONS));
  }

}

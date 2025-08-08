import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../login/shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private readonly ACCESS_STATE = '_ACCESS_STATE';
  private readonly API_ACTIVITY_URL = `${environment.API_BASE_URL_TASKS}/activities`;
  permissionsList: number[] = [];

  constructor(public httpClient: HttpClient, private authService: AuthService) { }
}

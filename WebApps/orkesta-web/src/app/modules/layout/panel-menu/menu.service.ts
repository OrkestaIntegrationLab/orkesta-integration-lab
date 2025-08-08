import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

     private readonly KEY_MENU_SELECTED = '_KEY_MENU_SELECTED';

    private menuSource = new Subject<string>();
    private resetSource = new Subject();

    menuSource$ = this.menuSource.asObservable();
    resetSource$ = this.resetSource.asObservable();


    get keySelected() {
        return localStorage.getItem(this.KEY_MENU_SELECTED) ?? '';
      }

    onMenuStateChange(key: string) {
        this.menuSource.next(key);
        localStorage.setItem(this.KEY_MENU_SELECTED, key);
    }

    reset() {
        this.resetSource.next(null);
        localStorage.setItem(this.KEY_MENU_SELECTED, '');
    }
}

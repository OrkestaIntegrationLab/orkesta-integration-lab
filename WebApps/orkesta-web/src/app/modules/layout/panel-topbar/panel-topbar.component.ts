import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';
import { Router } from '@angular/router';
import { AuthService } from '../../login/shared/auth.service';
import { LayoutService } from '../shared/layout.service';
import { MenuService } from '../panel-menu/menu.service';

@Component({
  selector: 'app-panel-topbar',
  templateUrl: './panel-topbar.component.html',
  styleUrls: ['./panel-topbar.component.scss']
})
export class PanelTopbarComponent implements OnInit {
 @Input() fullName: '';
    //@Input() offices: CompanyOffice[];
    @Output() officeSelected: EventEmitter<any> = new EventEmitter<any>();

    get userImage() {
       return this.defaultURL
    }

      get defaultURL() {
      return `https://ui-avatars.com/api/?name=${this.fullName}&background=17a2b8&color=fff&rounded=true&bold=true&size=200`
    }

   activeItem: number;
    currentApplicationVersion: string;
  constructor(
        public app: LayoutComponent,
        private router: Router,
        private _authService: AuthService,
        private _layoutService: LayoutService,
        private menuService: MenuService
  ) { 

     this.currentApplicationVersion = "1.beta";
  }

  
  ngOnInit(): void {
  }

     onOpenProfile() {
        this.router.navigate(['/profile/me']);
    }

        onLogOut() {
        //this._layoutService.removeStateAccessFromStorage();
        //this._authService.removeUserStateFromStorage();
        this.menuService.reset();
        window.location.replace('');
    }


 onOfficeSelected(companyOffice) {
        // this.officeSelected.next(companyOffice);
    }

 mobileMegaMenuItemClick(index) {
        this.app.megaMenuMobileClick = true;
        this.activeItem = this.activeItem === index ? null : index;
    }


}

import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { ModuleP } from 'src/app/models/security/module-p';
import { LayoutService } from '../shared/layout.service';
import { MenuService } from '../panel-menu/menu.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
    animations: [
    trigger('mask-anim', [
        state('void', style({
            opacity: 0
        })),
        state('visible', style({
            opacity: 0.8
        })),
        transition('* => *', animate('250ms cubic-bezier(0, 0, 0.2, 1)'))
    ])
]
})
export class LayoutComponent implements OnInit,OnDestroy {

   items: MenuItem[];
   userId: number;
   //userOffices: CompanyOffice[] = [];
   currentOffice;
   fullName: '';
   parentModules: ModuleP[] = [];
   menu: MenuItem[];
   horizontalMenu: boolean;
   darkMode = false;
   menuColorMode = 'light';
   menuColor = 'layout-menu-light';
   themeColor = 'blue';
   layoutColor = 'blue';
   rightPanelClick: boolean;
   rightPanelActive: boolean;
   menuClick: boolean;
   staticMenuActive: boolean;
   menuMobileActive: boolean;
   megaMenuClick: boolean;
   megaMenuActive: boolean;
   megaMenuMobileClick: boolean;
   megaMenuMobileActive: boolean;
   topbarItemClick: boolean;
   topbarMobileMenuClick: boolean;
   topbarMobileMenuActive: boolean;
   sidebarActive: boolean;
   activeTopbarItem: any;
   topbarMenuActive: boolean;
   menuHoverActive: boolean;
   configActive: boolean;
   configClick: boolean;
   ripple = true;
   inputStyle = 'outlined';
   routeObserver = null;

  constructor(private _layoutSerice: LayoutService,
    private menuService: MenuService,
    private primengConfig: PrimeNGConfig,
    private router: Router,) { }

  ngOnInit(): void {
     this.primengConfig.ripple= true;
  }

   ngOnDestroy() {
      this.routeObserver.unsubscribe();
    }

    
    onLayoutClick() {
        if (!this.topbarItemClick) {
            this.activeTopbarItem = null;
            this.topbarMenuActive = false;
        }

        if (!this.rightPanelClick) {
            this.rightPanelActive = false;
        }

        if (!this.megaMenuClick) {
            this.megaMenuActive = false;
        }

        if (!this.megaMenuMobileClick) {
            this.megaMenuMobileActive = false;
        }

        if (!this.menuClick) {
            if (this.isHorizontal()) {
                this.menuService.reset();
            }

            if (this.menuMobileActive) {
                this.menuMobileActive = false;
            }

            this.menuHoverActive = false;
        }

        if (this.configActive && !this.configClick) {
            this.configActive = false;
        }

        this.configClick = false;
        this.menuClick = false;
        this.topbarItemClick = false;
        this.megaMenuClick = false;
        this.megaMenuMobileClick = false;
        this.rightPanelClick = false;
    }

        onMegaMenuButtonClick(event) {
        this.megaMenuClick = true;
        this.megaMenuActive = !this.megaMenuActive;
        event.preventDefault();
    }

    onMegaMenuClick(event) {
        this.megaMenuClick = true;
        event.preventDefault();
    }

    onTopbarItemClick(event, item) {
        this.topbarItemClick = true;

        if (this.activeTopbarItem === item) {
            this.activeTopbarItem = null; } else {
            this.activeTopbarItem = item; }

        event.preventDefault();
    }

    
    onRightPanelButtonClick(event) {
        this.rightPanelClick = true;
        this.rightPanelActive = !this.rightPanelActive;

        event.preventDefault();
    }

    onRightPanelClose(event) {
        this.rightPanelActive = false;
        this.rightPanelClick = false;

        event.preventDefault();
    }

    onRightPanelClick(event) {
        this.rightPanelClick = true;

        event.preventDefault();
    }

        onMegaMenuMobileButtonClick(event) {
        this.megaMenuMobileClick = true;
        this.megaMenuMobileActive = !this.megaMenuMobileActive;

        event.preventDefault();
    }

    onMenuButtonClick(event) {
        this.menuClick = true;
        this.topbarMenuActive = false;

        if (this.isMobile()) {
            this.menuMobileActive = !this.menuMobileActive;
        }

        event.preventDefault();
    }

    onSidebarClick(event: Event) {
        this.menuClick = true;
    }

    onToggleMenuClick(event: Event) {
        this.staticMenuActive = !this.staticMenuActive;
        event.preventDefault();
    }

    onConfigClick(event) {
        this.configClick = true;
    }


    onTopbarMobileMenuButtonClick(event) {
        this.topbarMobileMenuClick = true;
        this.topbarMobileMenuActive = !this.topbarMobileMenuActive;

        event.preventDefault();
    }


     isDesktop() {
        return window.innerWidth > 991;
    }

    isMobile() {
        return window.innerWidth <= 991;
    }

    isHorizontal() {
        return this.horizontalMenu === true;
    }

    
    private handleError(error) {
      console.error('Error at layout-componet', error);
    }

    
    onOfficeSelected(companyOffice) {
        console.log(companyOffice)
     // this._authService.updateCurrentOffice(companyOffice.idOffice, companyOffice.idCompany,companyOffice.nameCompany,companyOffice.nameOffice);
     // this._authService.removeRouteVisited();
      //this.getCurrentOffice();
      //this.loadUserModules();
    }


}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LayoutComponent } from './layout/layout.component';
import { PanelRightComponent } from './panel-right/panel-right.component';
import { PanelConfigComponent } from './panel-config/panel-config.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PanelMenuComponent } from './panel-menu/panel-menu.component';
import { PanelTopbarComponent } from './panel-topbar/panel-topbar.component';
import { PanelFooterComponent } from './panel-footer/panel-footer.component';
import { PanelMenuItemComponent } from './panel-menu-item/panel-menu-item.component';
import { PanelRightTasksComponent } from './panel-right/panel-right-tasks/panel-right-tasks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoadingComponent } from '../common/components/loading/loading.component';
import { SafePipe } from 'src/app/safe.pipe';
import { ProfileItemComponent } from './panel-topbar/profile-item/profile-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { PrimengModule } from '../primeng/primeng.module';
import { CommonAppModule } from '../common/common.module';


@NgModule({
  declarations: [
    LandingPageComponent,
    LayoutComponent,
    PanelRightComponent,
    PanelConfigComponent,
    BreadcrumbComponent,
    PanelMenuComponent,
    PanelTopbarComponent,
    PanelFooterComponent,
    PanelMenuItemComponent,
    PanelRightTasksComponent,
    DashboardComponent,
    LoadingComponent,
    SafePipe,
    ProfileItemComponent,
  ],
  imports: [
    PrimengModule,
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    CommonAppModule,
  ],exports:[
  CommonAppModule],
})
export class LayoutModule { }

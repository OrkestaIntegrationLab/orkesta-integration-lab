import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './modules/layout/layout/layout.component';
import { PanelMenuComponent } from './modules/layout/panel-menu/panel-menu.component';
import { PanelTopbarComponent } from './modules/layout/panel-topbar/panel-topbar.component';
import { PanelRightComponent } from './modules/layout/panel-right/panel-right.component';
import { PanelMenuItemComponent } from './modules/layout/panel-menu-item/panel-menu-item.component';
import { PanelFooterComponent } from './modules/layout/panel-footer/panel-footer.component';
import { PanelConfigComponent } from './modules/layout/panel-config/panel-config.component';
import { LandingPageComponent } from './modules/layout/landing-page/landing-page.component';
import { DashboardComponent } from './modules/layout/dashboard/dashboard.component';
import { BreadcrumbComponent } from './modules/layout/breadcrumb/breadcrumb.component';
import { LoadingComponent } from './modules/common/components/loading/loading.component';
import { SafePipe } from './safe.pipe';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NotfoundComponent } from './modules/notfound/notfound.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { hosts } from '../environments/environment';
import { AuthInterceptor } from './interceptors/httpconfig.interceptor';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    TranslateModule.forRoot({
      defaultLanguage: 'es',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
     HttpClientModule,
     BrowserAnimationsModule,
     AppRoutingModule
  ],
  providers: [

    { provide: 'API_BASE_URL', useFactory: getBaseUrl },
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
      },{ provide: LOCALE_ID, useValue: 'es-ES' },
      HttpClient



  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getBaseUrl(): string {
  return hosts.API_BASE;
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MessageModule } from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';



@NgModule({
  declarations: [LayoutComponent, BreadcrumbComponent],
  imports: [CommonModule, RouterModule, BreadcrumbModule ,MessageModule , ToastModule],

  exports: [LayoutComponent,BreadcrumbComponent,ToastModule],
  
  providers: [MessageService],
})
export class LayoutModule { }

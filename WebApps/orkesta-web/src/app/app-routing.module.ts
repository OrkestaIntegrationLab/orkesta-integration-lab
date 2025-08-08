import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './modules/notfound/notfound.component';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./modules/layout/layout.module').then(m => m.LayoutModule),
  },
    {
    path: 'masters',
    loadChildren: () => import('./modules/masters/masters.module').then(m => m.MastersModule)
    },
   {
  path: '**',
  component: NotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

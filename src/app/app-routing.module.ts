import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [

  {
    path: '',
    loadChildren: ()=> import('./home/home.module').then(m=>m.HomeModule)
  },
  {
    path: 'mod',
    loadChildren: ()=> import('./mod/mod.module').then(m=>m.ModModule)
  },
  {
    path: 'warframe',
    loadChildren: ()=> import('./warframe/warframe.module').then(m=>m.WarframeModule)
  },
  {
    path: 'warframe-config',
    loadChildren: ()=> import('./warframe-config/warframe-config.module').then(m=>m.WarframeConfigModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

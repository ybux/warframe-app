import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayModComponent } from './display-mod/display-mod.component';
import { ModComponent } from './mod.component';
const routes: Routes = [
  {
    path: '',
    component: ModComponent,
    children: [
      {
        path:'display',
        component:DisplayModComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModRoutingModule { }

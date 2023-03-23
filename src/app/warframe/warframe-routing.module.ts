import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarframeComponent } from './warframe.component';
const routes: Routes = [
  {
    path: '',
    component: WarframeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarframeRoutingModule { }

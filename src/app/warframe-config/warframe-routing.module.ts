import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarframeConfigComponent } from './warframe-config.component';
const routes: Routes = [
  {
    path: '',
    component: WarframeConfigComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarframeConfigRoutingModule { }

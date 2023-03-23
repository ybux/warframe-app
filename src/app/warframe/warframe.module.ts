import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarframeComponent } from './warframe.component';
import { SharedModule } from '../shared/shared.module';
import { WarframeRoutingModule } from './warframe-routing.module';



@NgModule({
  declarations: [WarframeComponent],
  imports: [
    CommonModule,
    SharedModule,
    WarframeRoutingModule
  ]
})
export class WarframeModule { }

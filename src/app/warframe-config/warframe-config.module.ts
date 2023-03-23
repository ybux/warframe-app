import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarframeConfigComponent } from './warframe-config.component';
import { SharedModule } from '../shared/shared.module';
import { WarframeConfigRoutingModule } from './warframe-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [WarframeConfigComponent],
  imports: [
    CommonModule,
    SharedModule,
    WarframeConfigRoutingModule,
    DragDropModule
  ]
})
export class WarframeConfigModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModComponent } from './mod.component';
import { ModRoutingModule } from './mod-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DisplayModComponent } from './display-mod/display-mod.component';


@NgModule({
  declarations: [
    ModComponent,
    DisplayModComponent
  ],
  imports: [
    CommonModule,
    ModRoutingModule,
    SharedModule
  ]
})
export class ModModule { }

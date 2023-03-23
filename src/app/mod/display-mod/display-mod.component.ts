import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-display-mod',
  templateUrl: './display-mod.component.html',
  styleUrls: ['./display-mod.component.css']
})
export class DisplayModComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any){}

}

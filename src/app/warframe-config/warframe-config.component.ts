import { Component, OnInit  } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { WarframeService } from '../warframe/warframe.service';
import { Warframe } from '../warframe/warframe';
import { ModService } from '../mod/mod.service';
import { ModInterface } from '../mod/mod-interface';
import { CdkDragDrop, moveItemInArray,transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-warframe-config',
  templateUrl: './warframe-config.component.html',
  styleUrls: ['./warframe-config.component.css']
})
export class WarframeConfigComponent implements OnInit {

  myControl = new FormControl('');
  options: Warframe[] = [];
  filteredOptions: Observable<Warframe[]>;
  warFrameSelected:string  = '';
  mods : ModInterface[]= [];
  modWarframe : ModInterface[] = [];
  limitMod:string = '/';
  constructor(private warframeService:WarframeService, private modService:ModService){}

  ngOnInit(): void {
    this.warframeService.getNameWarframes().subscribe(({warframes})=>{
      this.options = warframes;
    })
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): Warframe[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  onOptionSelected(event:any) {
    this.warFrameSelected = event.option.value;
    this.modService.getModsWarframe(this.warFrameSelected).subscribe(({mods})=>{
      this.mods = mods;
    })
  }

  drop(event: CdkDragDrop<ModInterface[]>) {
    console.log( event.previousIndex, event.currentIndex)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}

import { Component,OnInit,ViewChild } from '@angular/core';
import { WarframeService } from './warframe.service';
import { Warframe } from './warframe';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-warframe',
  templateUrl: './warframe.component.html',
  styleUrls: ['./warframe.component.css']
})
export class WarframeComponent implements OnInit{
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['image'];
  dataSource = new MatTableDataSource();

  warframes: Warframe[] = [];
  constructor(private warframeService:WarframeService){}

  ngOnInit(): void {
    this.warframeService.getWarframes().subscribe((resp)=>{
      this.dataSource =  new MatTableDataSource(resp.warframes);
      this.dataSource.paginator = this.paginator;

    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

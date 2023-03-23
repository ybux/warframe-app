import { Component, OnInit, ViewChild } from '@angular/core';
import { ModService } from './mod.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DisplayModComponent } from './display-mod/display-mod.component';

@Component({
  selector: 'app-mod',
  templateUrl: './mod.component.html',
  styleUrls: ['./mod.component.css']
})
export class ModComponent implements OnInit{
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['name','type','compatName'];
  dataSource = new MatTableDataSource();


  constructor(private service: ModService, private matDialog:MatDialog){}

  ngOnInit(): void{
    this.service.getMods().subscribe(resp => {
      this.dataSource =  new MatTableDataSource(resp.mods);
      this.dataSource.paginator = this.paginator;

    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  displayMod(element:any){
    this.matDialog.open(DisplayModComponent,{
      data:element
    })
  }
}

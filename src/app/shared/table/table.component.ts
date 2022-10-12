import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() data: any = new MatTableDataSource();
  @Input() columns: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

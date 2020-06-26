import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ListadoUltimasEscriturasDataSource, ListadoUltimasEscriturasItem } from './listado-ultimas-escrituras-datasource';

@Component({
  selector: 'app-listado-ultimas-escrituras',
  templateUrl: './listado-ultimas-escrituras.component.html',
  styleUrls: ['./listado-ultimas-escrituras.component.css']
})
export class ListadoUltimasEscriturasComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ListadoUltimasEscriturasItem>;
  dataSource: ListadoUltimasEscriturasDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'tipoEscritura','fechaDeCreacion','fechaDePago'];

  ngOnInit() {
    this.dataSource = new ListadoUltimasEscriturasDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}

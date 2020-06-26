import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface ListadoUltimasEscriturasItem {
  id: number;
  name: string;
  tipoEscritura: string;
  fechaDeCreacion: string;
  fechaDePago: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: ListadoUltimasEscriturasItem[] = [
  { id: 1, name: 'Hydrogen', tipoEscritura: 'Tranferencia', fechaDeCreacion: '25/12/2019', fechaDePago: ''},
  { id: 2, name: 'Helium', tipoEscritura: 'Tranferencia', fechaDeCreacion: '25/12/2019', fechaDePago: '01/01/2020'},
  { id: 3, name: 'Lithium', tipoEscritura: 'Tranferencia', fechaDeCreacion: '25/12/2019', fechaDePago: ''},
  { id: 4, name: 'Beryllium', tipoEscritura: 'Tranferencia', fechaDeCreacion: '25/12/2019', fechaDePago: '01/01/2020'},
  { id: 5, name: 'Boron', tipoEscritura: 'Tranferencia', fechaDeCreacion: '25/12/2019', fechaDePago: ''},
  { id: 6, name: 'Carbon', tipoEscritura: 'Tranferencia', fechaDeCreacion: '25/12/2019', fechaDePago: '01/01/2020'},
  { id: 7, name: 'Nitrogen', tipoEscritura: 'Tranferencia', fechaDeCreacion: '25/12/2019', fechaDePago: ''},
  { id: 8, name: 'Oxygen', tipoEscritura: 'Tranferencia', fechaDeCreacion: '25/12/2019', fechaDePago: '01/01/2020'},
  { id: 9, name: 'Fluorine', tipoEscritura: 'Tranferencia', fechaDeCreacion: '25/12/2019', fechaDePago: ''},
  { id: 10, name: 'Neon', tipoEscritura: 'Tranferencia', fechaDeCreacion: '25/12/2019', fechaDePago: '01/01/2020'},
  { id: 11, name: 'Sodium', tipoEscritura: 'Poder', fechaDeCreacion: '25/12/2019', fechaDePago: ''},
  { id: 12, name: 'Magnesium', tipoEscritura: 'Poder', fechaDeCreacion: '25/12/2019', fechaDePago: '01/01/2020'},
  { id: 13, name: 'Aluminum', tipoEscritura: 'Poder', fechaDeCreacion: '25/12/2019', fechaDePago: ''},
  { id: 14, name: 'Silicon', tipoEscritura: 'Poder', fechaDeCreacion: '25/12/2019', fechaDePago: '01/01/2020'},
  { id: 15, name: 'Phosphorus', tipoEscritura: 'Poder', fechaDeCreacion: '25/12/2019', fechaDePago: ''},
  { id: 16, name: 'Sulfur', tipoEscritura: 'Poder', fechaDeCreacion: '25/12/2019', fechaDePago: '01/01/2020'},
  { id: 17, name: 'Chlorine', tipoEscritura: 'Poder', fechaDeCreacion: '25/12/2019', fechaDePago: ''},
  { id: 18, name: 'Argon', tipoEscritura: 'Poder', fechaDeCreacion: '25/12/2019', fechaDePago: '01/01/2020'},
  { id: 19, name: 'Potassium', tipoEscritura: 'Poder', fechaDeCreacion: '25/12/2019', fechaDePago: ''},
  { id: 20, name: 'Calcium', tipoEscritura: 'Poder', fechaDeCreacion: '25/12/2019', fechaDePago: '01/01/2020'},

];

/**
 * Data source for the ListadoUltimasEscrituras view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ListadoUltimasEscriturasDataSource extends DataSource<ListadoUltimasEscriturasItem> {
  data: ListadoUltimasEscriturasItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ListadoUltimasEscriturasItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() { }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: ListadoUltimasEscriturasItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ListadoUltimasEscriturasItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'tipoEscritura': return compare(a.tipoEscritura, b.tipoEscritura, isAsc);
        case 'fechaDeCreacion': return compare(a.fechaDeCreacion, b.fechaDeCreacion, isAsc);
        case 'fechaDePago': return compare(a.fechaDePago, b.fechaDePago, isAsc);

        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

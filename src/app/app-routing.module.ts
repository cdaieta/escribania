import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { ListadoUltimasEscriturasComponent } from './listado-ultimas-escrituras/listado-ultimas-escrituras.component';
import { SeleccionarClienteComponent } from './clientes/seleccionar-cliente/seleccionar-cliente.component';
import { AltaClienteComponent } from './clientes/alta-cliente/alta-cliente.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';

const routes: Routes = [
  {
    path: '',
    component: BarraSuperiorComponent,
    children:
      [
        { path: "", component: ListadoUltimasEscriturasComponent },
        { path: "seleccionar-cliente", component: SeleccionarClienteComponent },
        { path: "alta-cliente", component: AltaClienteComponent },
        { path: "pagina-principal", component: PaginaPrincipalComponent },
        
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

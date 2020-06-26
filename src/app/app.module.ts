import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ListadoUltimasEscriturasComponent } from './listado-ultimas-escrituras/listado-ultimas-escrituras.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormularioComponent } from './formulario/formulario.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SeleccionarClienteComponent } from './clientes/seleccionar-cliente/seleccionar-cliente.component';
import { AltaClienteComponent } from './clientes/alta-cliente/alta-cliente.component';
import { ModificacionClienteComponent } from './clientes/modificacion-cliente/modificacion-cliente.component';
import { BajaClienteComponent } from './clientes/baja-cliente/baja-cliente.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent,
    ListadoUltimasEscriturasComponent,
    FormularioComponent,
    LoginComponent,
    SeleccionarClienteComponent,
    AltaClienteComponent,
    ModificacionClienteComponent,
    BajaClienteComponent,
    PaginaPrincipalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

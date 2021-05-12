import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListaArticulosComponent } from './components/lista-articulos/lista-articulos.component';
import { ConvertirAEspacioPipe } from './shared/convertir-aespacio.pipe';
import { PuntajeComponent } from './components/puntaje/puntaje.component';
import { ArticuloFamiliaComponent } from "./components/articulo-familia/articulo-familia.component";
import { PrincipalComponent } from './components/principal/principal.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { DetalleArticuloComponent } from './components/detalle-articulo/detalle-articulo.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaArticulosComponent,
    ConvertirAEspacioPipe,
    PuntajeComponent,
    ArticuloFamiliaComponent,
    PrincipalComponent,
    PaginaNoEncontradaComponent,
    DetalleArticuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

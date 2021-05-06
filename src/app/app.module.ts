import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaArticulosComponent } from './components/lista-articulos/lista-articulos.component';
import { ConvertirAEspacioPipe } from './shared/convertir-aespacio.pipe';
import { PuntajeComponent } from './components/puntaje/puntaje.component';
import { ArticuloFamiliaComponent } from "./components/articulo-familia/articulo-familia.component";

@NgModule({
  declarations: [
    AppComponent,
    ListaArticulosComponent,
    ConvertirAEspacioPipe,
    PuntajeComponent,
    ArticuloFamiliaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

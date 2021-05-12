import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloFamiliaComponent } from './components/articulo-familia/articulo-familia.component';
import { DetalleArticuloComponent } from './components/detalle-articulo/detalle-articulo.component';
import { ListaArticulosComponent } from './components/lista-articulos/lista-articulos.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { PrincipalComponent } from './components/principal/principal.component';

const routes: Routes = [{
  path: 'articulo',
  component: ArticuloFamiliaComponent
},
{
  path: 'listaarticulo',
  component: ListaArticulosComponent
},
{
  path: '',
  component: PrincipalComponent
},
{
  path: 'articulo/:id',
  component: DetalleArticuloComponent
},
{
  path: 'articulo/:id/:id2',
  component: DetalleArticuloComponent
},
{
  path: '**',
  component: PaginaNoEncontradaComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

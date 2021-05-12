import { Component, OnInit, VERSION, Version } from '@angular/core';
import { ArticulosService } from 'src/app/services/articulos.service';
//import { FormsModule } from "@angular/forms";
import { IArticulo } from '../../models/iarticulo'

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.css'],
  providers: [ArticulosService]
})

export class ListaArticulosComponent implements OnInit {
  
  titulo: string = 'Lista de artículos';
  alturaImagen = 40;
  filtro: string;
  cantidadMinima: string;
  articulos: IArticulo[];


  constructor(private articulosService: ArticulosService) { }


  ngOnInit(): void {
    this.articulos = this.articulosService.getArticulos();
    this.articulos[0] = {
        id: 35,
        descripcion: 'Articulo AAA',
        codigo: 'xsd-999',
        cantidad: 150,
        precio: 566.85,
        puntaje: 1,
        imagen: '/assets/imagenes/art07.jpg',
        active: true
    };  
  }

  obtenerVersion(): string {
    return VERSION.full;
  }

  limpiar(): void {
    this.articulos = [];
    this.filtro = ""; 
  }

  cambiarEstado(art) {
    art.active = !art.active;
  }

  onPuntajeClicked(mensaje:string): void{
    this.titulo = 'Lista de Artículos - ' + mensaje;
}


}


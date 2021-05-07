import { Component, OnInit, VERSION, Version } from '@angular/core';
//import { FormsModule } from "@angular/forms";
import { IArticulo } from '../../models/iarticulo'

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.css']
})

export class ListaArticulosComponent implements OnInit {
  
  titulo: string = 'Lista de artículos';
  alturaImagen = 40;
  filtro: string;
  cantidadMinima: string;
  articulos: IArticulo[] = [
    {
        id: 2,
        descripcion: 'Articulo X',
        codigo: 'xsd-143',
        cantidad: 139,
        precio: 1220.0576,
        puntaje: 4.8,
        imagen: '/assets/imagenes/art02.jpg',
        active: true
    },
    {
        id: 5,
        descripcion: 'Articulo Y',
        codigo: 'dlg-912',
        cantidad: 336,
        precio: 400.50995,
        puntaje: 3.5,
        imagen: '/assets/imagenes/art03.jpg',
        active: true
    }       
];


  constructor() { }


  ngOnInit(): void {
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


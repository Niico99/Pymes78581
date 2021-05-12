import { Injectable } from '@angular/core';
import { IArticulo } from '../models/iarticulo';


@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor() { }

  getArticulos(): IArticulo[] {
    return [
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
  }

}

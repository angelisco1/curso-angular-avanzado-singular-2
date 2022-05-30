import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Producto } from '../state/app.types';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  getProductos(): Observable<Array<Producto>> {
    // Esto habría que cambiarlo por una petición HTTP
    return of([
      {
        nombre: 'Perrito piloto',
        precio: 12,
        stock: 4,
        codigo: 18
      },
      {
        nombre: 'Peluche de Sonic',
        precio: 5,
        stock: 6,
        codigo: 12
      },
      {
        nombre: 'Pistola de bolas',
        precio: 8,
        stock: 5,
        codigo: 23
      },
    ])
      .pipe(
        delay(1500)
      )
  }
}

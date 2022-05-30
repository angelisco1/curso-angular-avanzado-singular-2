import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { first, map, switchMap } from 'rxjs';
import { ProductosService } from 'src/app/services/productos.service';
import { COMPROBAR_SACAR_PRODUCTO, PEDIR_PRODUCTOS } from '../actions/actions.types';
import { AppState, Producto } from '../app.types';
import { cargarProductos, sacarProducto } from '../actions/productos.actions';
import { selectProductoByCodigo } from '../selectors/productos.selector';

@Injectable()
export class MaquinaExpEffects {

  cargarProductos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PEDIR_PRODUCTOS),
      // Recibo un observable -> Devuelvo un observable
      switchMap(() => this.productosService.getProductos()),
      map((listaProductos: Array<Producto>) => {
        return cargarProductos({ productos: listaProductos })
      }),
    )
  })

  comprobarSacarProducto$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(COMPROBAR_SACAR_PRODUCTO),
      switchMap((action: any) => {
        return this.store.select(selectProductoByCodigo(action.codigo))
          .pipe(first())
      }),
      map(({ producto }) => {
        if (producto) {
          return sacarProducto({ producto })
        }
        return { type: 'EMPTY' }
      })
    )
  })

  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private productosService: ProductosService) { }

}

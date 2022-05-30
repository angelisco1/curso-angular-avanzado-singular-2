import { createAction, props } from "@ngrx/store";
import { Producto } from "../app.types";
import * as ActionTypes from './actions.types'

// Action Creator -> Crear el objeto que define la acción
// {type: '', payload: {}}

export const cargarProductos = createAction(
  ActionTypes.CARGAR_PRODUCTOS,
  props<{ productos: Array<Producto> }>()
)

export const comprobarSacarProducto = createAction(
  ActionTypes.COMPROBAR_SACAR_PRODUCTO,
  props<{ codigo: number }>()
)

export const pedirProductos = createAction(
  ActionTypes.PEDIR_PRODUCTOS
)

export const sacarProducto = createAction(
  ActionTypes.SACAR_PRODUCTO,
  props<{ producto: Producto }>()
)

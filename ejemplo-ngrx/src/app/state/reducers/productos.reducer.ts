import { createReducer, on } from "@ngrx/store";
import { cargarProductos } from "../actions/productos.actions";
import { ProductosState } from "../app.types";

const initialState: ProductosState = {
  productos: []
}

export const productosReducer = createReducer(
  initialState,
  on(cargarProductos, (state, action) => {
    console.log('PR-REDUCER - cargarProductos', state, action)
    return {
      productos: action.productos
    }
  })
)
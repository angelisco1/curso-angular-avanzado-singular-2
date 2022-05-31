import { createReducer, on } from "@ngrx/store";
import { cargarProductos, sacarProducto } from "../actions/productos.actions";
import { Producto, ProductosState } from "../app.types";

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
  }),
  on(sacarProducto, (state, action) => {
    console.log('PR-REDUCER - sacarProducto', state, action)
    const productosActualizados = state.productos.map((p: Producto) => {
      if (p.codigo === action.producto.codigo) {
        return {
          ...p,
          stock: p.stock - 1
        }
      }
      return p
    })
    return {
      productos: productosActualizados
    }
  })
)
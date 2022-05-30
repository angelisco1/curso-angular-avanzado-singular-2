import { createReducer, on } from "@ngrx/store";
import { cargarProductos, pedirProductos } from "../actions/productos.actions";
import { InfoMaquinaState } from "../app.types";

const initialState: InfoMaquinaState = {
  cargando: false,
  totalRecaudado: 0,
  productosVendidos: 0,
  totalProductos: 0,
}

export const infoMaquinaReducer = createReducer(
  initialState,
  on(pedirProductos, (state) => {
    console.log('IM-REDUCER - pedirProductos', state)
    return {
      ...state,
      cargando: true
    }
  }),
  on(cargarProductos, (state, action) => {
    console.log('IM-REDUCER - cargarProductos', state, action)
    return {
      ...state,
      cargando: false,
      totalProductos: action.productos.reduce((acc, producto) => acc += producto.stock, 0)
    }
  })
)
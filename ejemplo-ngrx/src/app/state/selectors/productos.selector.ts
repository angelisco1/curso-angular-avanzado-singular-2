import { createSelector } from "@ngrx/store";
import { AppState, ProductosState } from "../app.types";

export const selectProductosState = (state: AppState) => state.productos

export const selectProductos = createSelector(
  selectProductosState,
  (state: ProductosState) => state.productos
)


export const selectProductoByCodigo = (codigo: number) => {
  return (state: AppState) => {
    const producto = state.productos.productos.find(p => p.codigo === codigo)
    return {
      producto
    }
  }
}
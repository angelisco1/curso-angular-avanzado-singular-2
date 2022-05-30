import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.types";
import { infoMaquinaReducer } from "./reducers/info-maquina.reducer";
import { pagoReducer } from "./reducers/pago.reducer";
import { productosReducer } from "./reducers/productos.reducer";


export const AppReducers: ActionReducerMap<AppState> = {
  infoMaquina: infoMaquinaReducer,
  productos: productosReducer,
  pago: pagoReducer
}
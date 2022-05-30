import { createReducer } from "@ngrx/store"
import { PagoState } from "../app.types"

const initialState: PagoState = {
  dineroInsertado: 0
}

export const pagoReducer = createReducer(
  initialState,
)
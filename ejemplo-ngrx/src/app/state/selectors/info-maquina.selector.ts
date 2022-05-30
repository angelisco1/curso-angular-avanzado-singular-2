import { createSelector } from "@ngrx/store";
import { AppState, InfoMaquinaState } from "../app.types";


export const selectInfoMaquina = (state: AppState) => state.infoMaquina

export const selectCargando = createSelector(selectInfoMaquina, (state: InfoMaquinaState) => state.cargando)
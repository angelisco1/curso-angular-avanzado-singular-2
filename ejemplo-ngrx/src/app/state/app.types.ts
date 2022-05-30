export interface AppState {
  infoMaquina: InfoMaquinaState,
  productos: ProductosState,
  pago: PagoState
}

export interface InfoMaquinaState {
  cargando: boolean,
  totalRecaudado: number,
  productosVendidos: number,
  totalProductos: number,
}

export interface ProductosState {
  productos: Array<Producto>,
}

export interface PagoState {
  dineroInsertado: number,
}

export interface Producto {
  nombre: string,
  precio: number,
  stock: number,
  codigo: number
}
import { InicioComponent } from "./inicio/inicio.component"
import { MiRouterModule } from "./mi-router/mi-router.module"
import { NuevoItemComponent } from "./nuevo-item/nuevo-item.component"

type Route = {path: string, component: any}
export type MiRoutes = Route[]

const APP_ROUTES: MiRoutes = [
  { path: '/', component: InicioComponent },
  { path: '/nuevo-item', component: NuevoItemComponent },
]

export const MiAppRoutingModule = MiRouterModule.forRoot(APP_ROUTES)
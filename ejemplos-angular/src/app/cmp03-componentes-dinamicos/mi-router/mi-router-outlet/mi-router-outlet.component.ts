import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { MiRoutes } from '../../app.routes';
import { InicioComponent } from '../../inicio/inicio.component';
import { NuevoItemComponent } from '../../nuevo-item/nuevo-item.component';
import { MiHostDirective } from '../mi-host.directive';
import { MiRouterService } from '../mi-router.service';

@Component({
  selector: 'app-mi-router-outlet',
  templateUrl: './mi-router-outlet.component.html',
  styleUrls: ['./mi-router-outlet.component.css']
})
export class MiRouterOutletComponent implements AfterViewInit {

  @ViewChild(MiHostDirective) host!: MiHostDirective;

  constructor(private miRouter: MiRouterService, @Inject('AppRutas') private rutas: MiRoutes) { }

  ngAfterViewInit() {
    const vcRef = this.host.viewContainerRef

    this.miRouter.rutaCambiada$.subscribe((path: string) => {
      vcRef.clear()

      // const tipoCmp = path === '/nuevo-item' ? NuevoItemComponent : InicioComponent
      const rutaEncontrada = this.rutas.find(ruta => ruta.path === path)


      vcRef.createComponent(rutaEncontrada?.component)
    })

  }
}

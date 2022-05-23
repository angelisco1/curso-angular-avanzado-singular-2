import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiRouterLinkDirective } from './mi-router-link.directive';
import { MiHostDirective } from './mi-host.directive';
import { MiRouterOutletComponent } from './mi-router-outlet/mi-router-outlet.component';
import { MiRoutes } from '../app.routes';

@NgModule({
  declarations: [
    MiRouterLinkDirective,
    MiHostDirective,
    MiRouterOutletComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MiRouterOutletComponent,
    MiRouterLinkDirective
  ]
})
export class MiRouterModule {

  static forRoot(rutas: MiRoutes): ModuleWithProviders<MiRouterModule> {
    return {
      ngModule: MiRouterModule,
      providers: [
        { provide: 'AppRutas', useValue: rutas }
      ]
    }
  }
}

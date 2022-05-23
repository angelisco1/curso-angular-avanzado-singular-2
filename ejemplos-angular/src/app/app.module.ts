import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Cmp01TransclusionComponent } from './cmp01-transclusion/cmp01-transclusion.component';
import { AcordeonComponent } from './cmp01-transclusion/acordeon/acordeon.component';
import { Cmp02ViewchildComponent } from './cmp02-viewchild/cmp02-viewchild.component';
import { ModalComponent } from './cmp02-viewchild/modal/modal.component';
import { Cmp03ComponentesDinamicosComponent } from './cmp03-componentes-dinamicos/cmp03-componentes-dinamicos.component';
import { VideoComponent } from './cmp03-componentes-dinamicos/video/video.component';
import { AudioComponent } from './cmp03-componentes-dinamicos/audio/audio.component';
import { HostDirective } from './cmp03-componentes-dinamicos/host.directive';
import { InicioComponent } from './cmp03-componentes-dinamicos/inicio/inicio.component';
import { NuevoItemComponent } from './cmp03-componentes-dinamicos/nuevo-item/nuevo-item.component';
// import { MiRouterModule } from './cmp03-componentes-dinamicos/mi-router/mi-router.module';
import { MiAppRoutingModule } from './cmp03-componentes-dinamicos/app.routes';

@NgModule({
  declarations: [
    AppComponent,
    Cmp01TransclusionComponent,
    AcordeonComponent,
    Cmp02ViewchildComponent,
    ModalComponent,
    Cmp03ComponentesDinamicosComponent,
    VideoComponent,
    AudioComponent,
    HostDirective,
    InicioComponent,
    NuevoItemComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    // MiRouterModule,
    MiAppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

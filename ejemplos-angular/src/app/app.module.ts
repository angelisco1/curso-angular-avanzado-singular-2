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
import { Cmp04LazyLoadingComponent } from './cmp04-lazy-loading/cmp04-lazy-loading.component';
import { Cmp05InternacionalizacionComponent } from './cmp05-internacionalizacion/cmp05-internacionalizacion.component';
import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en'
import localeEs from '@angular/common/locales/es'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Cmp06AnimacionesComponent } from './cmp06-animaciones/cmp06-animaciones.component';
import { ZoomComponent } from './cmp06-animaciones/zoom/zoom.component';
import { ShakeComponent } from './cmp06-animaciones/shake/shake.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


const httpLoaderFactory = (http: HttpClient) => {
  return new TranslateHttpLoader(http)
}


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
    NuevoItemComponent,
    Cmp04LazyLoadingComponent,
    Cmp05InternacionalizacionComponent,
    Cmp06AnimacionesComponent,
    ZoomComponent,
    ShakeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MiAppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // MiRouterModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localeEn, 'en')
    registerLocaleData(localeEs, 'es')
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { BotonesPagarComponent } from './botones-pagar/botones-pagar.component';
import { InfoMaquinaComponent } from './info-maquina/info-maquina.component';
import { FormCodigoComponent } from './form-codigo/form-codigo.component';
import { AppReducers } from './state/app.state';
import { MaquinaExpEffects } from './state/effects/maquina-exp.effects';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    BotonesPagarComponent,
    InfoMaquinaComponent,
    FormCodigoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(AppReducers, {}),
    EffectsModule.forRoot([MaquinaExpEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

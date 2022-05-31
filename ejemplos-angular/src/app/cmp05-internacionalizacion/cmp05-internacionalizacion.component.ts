import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslatePipe, TranslateService, TranslationChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-cmp05-internacionalizacion',
  templateUrl: './cmp05-internacionalizacion.component.html',
  styleUrls: ['./cmp05-internacionalizacion.component.css']
})
export class Cmp05InternacionalizacionComponent implements OnInit {

  listaLang: Array<string> = ['es', 'en']
  lenguajeSeleccionado: string
  precio: number = 3
  fecha = new Date()

  constructor(private translateService: TranslateService) {
    this.lenguajeSeleccionado = translateService.getDefaultLang()
    // this.translateService.use(this.lenguajeSeleccionado)

    translateService.onLangChange.subscribe((event: TranslationChangeEvent) => {
      console.log('Cambiada traducciones', event)
    })
  }

  ngOnInit(): void {
  }

  cambiarLang(event: any) {
    this.lenguajeSeleccionado = event.target.value
    this.translateService.use(this.lenguajeSeleccionado)
  }

}

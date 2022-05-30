import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, InfoMaquinaState } from '../state/app.types';
import { selectInfoMaquina } from '../state/selectors/info-maquina.selector';

@Component({
  selector: 'app-info-maquina',
  templateUrl: './info-maquina.component.html',
  styleUrls: ['./info-maquina.component.css']
})
export class InfoMaquinaComponent implements OnInit {
  infoMaquina: InfoMaquinaState = {
    cargando: false,
    totalProductos: 0,
    totalRecaudado: 0,
    productosVendidos: 0,
  }

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(selectInfoMaquina)
      .subscribe(info => this.infoMaquina = info)
  }

}

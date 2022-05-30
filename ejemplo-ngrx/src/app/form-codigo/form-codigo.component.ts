import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { comprobarSacarProducto } from '../state/actions/productos.actions';
import { AppState } from '../state/app.types';

@Component({
  selector: 'app-form-codigo',
  templateUrl: './form-codigo.component.html',
  styleUrls: ['./form-codigo.component.css']
})
export class FormCodigoComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  sacar(codigo: string) {
    this.store.dispatch(comprobarSacarProducto({ codigo: Number(codigo) }))
  }

}

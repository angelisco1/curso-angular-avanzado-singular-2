import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { pedirProductos } from './state/actions/productos.actions';
import { AppState } from './state/app.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private store: Store<AppState>) {
    store.dispatch(pedirProductos())
  }
}

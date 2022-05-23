import { Component, OnInit } from '@angular/core';
import { MiRouterService } from '../mi-router/mi-router.service';

@Component({
  selector: 'app-nuevo-item',
  templateUrl: './nuevo-item.component.html',
  styleUrls: ['./nuevo-item.component.css']
})
export class NuevoItemComponent implements OnInit {

  constructor(private miRouter: MiRouterService) { }

  ngOnInit(): void {
  }

  guardar() {
    console.log('Guardando...')
    setTimeout(() => {
      console.log('Nuevo item guardado 😀')
      this.miRouter.navigate(['/'])
    }, 3000)
  }
}

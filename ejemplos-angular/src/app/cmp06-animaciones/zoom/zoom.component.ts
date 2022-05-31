import { state, style, trigger, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

const GET_STATE: any = {
  'sin-zoom': 'con-zoom',
  'con-zoom': 'sin-zoom'
}


@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.css'],
  animations: [
    trigger('zoom', [
      state('con-zoom', style({
        transform: 'scale(1.6)'
      })),
      state('sin-zoom', style({
        transform: 'scale(1)'
      })),
      transition('sin-zoom <=> con-zoom', animate('500ms 0s ease-out')),
      // transition('con-zoom => sin-zoom', animate('500ms'))
    ])
  ]
})
export class ZoomComponent implements OnInit {
  zoomState: string = 'sin-zoom'

  constructor() { }

  ngOnInit(): void {
  }

  cambiarEstado() {
    this.zoomState = GET_STATE[this.zoomState]
  }

}

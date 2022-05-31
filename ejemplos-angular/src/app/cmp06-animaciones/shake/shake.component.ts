import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';

const GET_STATE: any = {
  'no-shaking': 'shaking',
  'shaking': 'no-shaking'
}

@Component({
  selector: 'app-shake',
  templateUrl: './shake.component.html',
  styleUrls: ['./shake.component.css'],
  animations: [
    trigger('shake', [
      transition('no-shaking <=> shaking', [
        animate(800, keyframes([
          style({
            transform: 'translate(0px, 0px) rotate(0deg)',
            offset: 0
          }),
          style({
            transform: 'rotate(-90deg)',
            offset: 0.1
          }),
          style({
            transform: 'translate(300px, 0px) rotate(0deg) ',
            offset: 0.3
          }),
          style({
            transform: 'rotate(90deg)',
            offset: 0.45
          }),
          style({
            transform: 'rotate(-90deg)',
            offset: 0.55
          }),
          style({
            transform: 'rotate(90deg)',
            offset: 0.9
          }),
          style({
            transform: 'translate(1000px, 0px) rotate(0deg)',
            offset: 1
          }),
        ]))
      ])
    ])
  ]
})
export class ShakeComponent implements OnInit {
  shakeState: string = 'no-shaking'

  constructor() { }

  ngOnInit(): void {
  }

  cambiarEstado() {
    this.shakeState = GET_STATE[this.shakeState]
  }

}

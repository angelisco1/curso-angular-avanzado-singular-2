import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  @Input() cuenta: number = 0
  @Output() cambiarCuentaEvent = new EventEmitter<{ tipo: string, valor: number }>()

  constructor() { }

  ngOnInit(): void {
  }

  decrementar() {
    this.cuenta--
    this.cambiarCuentaEvent.emit({ tipo: 'decrementar', valor: this.cuenta })

  }

  incrementar() {
    this.cuenta++
    this.cambiarCuentaEvent.emit({ tipo: 'incrementar', valor: this.cuenta })
  }
}

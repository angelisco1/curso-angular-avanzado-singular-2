import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  estaCerrado: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  cerrar() {
    this.estaCerrado = true
  }

  abrir() {
    this.estaCerrado = false
  }
}

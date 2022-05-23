import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-cmp02-viewchild',
  templateUrl: './cmp02-viewchild.component.html',
  styleUrls: ['./cmp02-viewchild.component.css']
})
export class Cmp02ViewchildComponent implements OnInit {

  // @ViewChild(ModalComponent) modal!: ModalComponent
  @ViewChild('modal2') modal!: ModalComponent

  constructor() { }

  ngOnInit(): void {
  }

  abrirModal() {
    this.modal.abrir()
  }
}

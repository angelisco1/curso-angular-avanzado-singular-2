import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-acordeon',
  templateUrl: './acordeon.component.html',
  styleUrls: ['./acordeon.component.css']
})
export class AcordeonComponent implements OnInit {
  @Input() titulo = ''
  estaCerrado: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  toggleCerrado() {
    this.estaCerrado = !this.estaCerrado
  }

}

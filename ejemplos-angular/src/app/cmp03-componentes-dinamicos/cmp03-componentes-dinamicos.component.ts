import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../cmp02-viewchild/modal/modal.component';
import { AudioComponent } from './audio/audio.component';
import { HostDirective } from './host.directive';
import { VideoComponent } from './video/video.component';

@Component({
  selector: 'app-cmp03-componentes-dinamicos',
  templateUrl: './cmp03-componentes-dinamicos.component.html',
  styleUrls: ['./cmp03-componentes-dinamicos.component.css']
})
export class Cmp03ComponentesDinamicosComponent implements OnInit {
  videos: Array<any> = [
    { titulo: 'Video 1', tipo: 'video', path: 'assets/video1.mp4' },
    { titulo: 'Video 2', tipo: 'video', path: 'assets/video2.mp4' },
  ]
  audios: Array<any> = [
    { titulo: 'Audio 1', tipo: 'audio', path: 'assets/audio1.mp3' },
    { titulo: 'Audio 2', tipo: 'audio', path: 'assets/audio2.mp3' },
  ]
  @ViewChild(HostDirective) host!: HostDirective
  @ViewChild(ModalComponent) modal!: ModalComponent

  constructor() { }

  ngOnInit(): void {
  }

  mostrarMediaElement(mediaElem: any) {
    // Aquí va la parte dinámica
    const vcRef = this.host.viewContainerRef
    vcRef.clear()
    const tipoCmp = mediaElem.tipo === 'audio' ? AudioComponent : VideoComponent
    const componente = vcRef.createComponent(tipoCmp)
    componente.instance.source = mediaElem.path
    this.modal.abrir()
  }

}

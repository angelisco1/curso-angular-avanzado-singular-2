import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DigimonsService, IDigimon } from '../services/digimons.service';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-lista-digimons',
  templateUrl: './lista-digimons.component.html',
  styleUrls: ['./lista-digimons.component.css']
})
export class ListaDigimonsComponent implements OnInit {
  titulo: string = 'Todos los digimons'
  digimons: Array<IDigimon> = []

  constructor(private digimonsService: DigimonsService, private route: ActivatedRoute, private seo: SeoService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const level = params.get('level') || null
      this.getListaDigimons(level)
    })
  }

  private getListaDigimons(level: string | null = null) {
    if (level) {
      this.titulo = 'Digimons: ' + level

      this.seo.cambiarInfoSeo(this.titulo, {
        keywords: `digimons, digimons ${level}, ${level}, api`,
        name: this.titulo
      })

      this.digimonsService.getDigimonsByLevel(level)
        .subscribe((digimons: Array<IDigimon>) => {
          this.digimons = digimons
        })
    } else {
      this.titulo = 'Digimons'

      this.seo.cambiarInfoSeo(this.titulo, {
        keywords: `digimons, api`,
        name: this.titulo
      })

      this.digimonsService.getDigimons()
        .subscribe((digimons: Array<IDigimon>) => {
          this.digimons = digimons
        })
    }
  }

}

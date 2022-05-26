import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta: Meta, private title: Title) { }

  // {description: 'Desc', author: 'autor'} => [['description', 'Desc'], []]
  cambiarInfoSeo(tituloPagina: string, metaData: any) {
    this.title.setTitle(tituloPagina)

    const metaTags = Object.entries(metaData).reduce((acc: any, meta: any) => {
      const [name, content] = meta
      acc.push({ name, content })
      return acc
    }, [])

    // [{name: 'description', content: 'Desc'}, {name: 'author', content: 'autor'}]

    metaTags.forEach((metaTag: any) => {
      this.meta.updateTag(metaTag)
    });

  }
}

import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { MiRouterService } from './mi-router.service';

@Directive({
  selector: '[appMiRouterLink]'
})
export class MiRouterLinkDirective {
  // @HostBinding('style.color') color = 'blue'
  // @HostBinding('style.textDecoration') textDec = 'underline'
  @HostBinding('style') styles = {
    color: 'blue',
    textDecoration: 'underline'
  }

  @Input('appMiRouterLink') path: string = '/'

  constructor(private miRouter: MiRouterService) { }

  @HostListener('click') onClick() {
    this.miRouter.navigateByUrl(this.path)
  }

}

import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { SuscripcionesService } from './services/suscripciones.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo-angular-pwa';

  constructor(private swPush: SwPush, private suscripcionesService: SuscripcionesService) {

    swPush.requestSubscription({serverPublicKey: 'BN3vio-Jmtrpt0tZzSDJ9XRfw-C3eqg86bRQRKiW2FUmwkVbGbGa9YPrPWFs4RhJH41iGPhX9p9AgwlLVqkjIb0'})
      .then((subscription: PushSubscription) => {
        console.log(subscription)
        this.suscripcionesService.guardarSuscripcion(subscription)
          .subscribe(() => {
            console.log('No te bombardearemos a notificaciones, prometido :)')
          })
      })


  }


}

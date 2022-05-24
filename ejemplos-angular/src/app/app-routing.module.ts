import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './cmp03-componentes-dinamicos/inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'admin', loadChildren: () => import('./cmp04-lazy-loading/admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

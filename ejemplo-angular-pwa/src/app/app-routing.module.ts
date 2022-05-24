import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaVendehumosComponent } from './lista-vendehumos/lista-vendehumos.component';
import { NuevoVendehumoComponent } from './nuevo-vendehumo/nuevo-vendehumo.component';

const routes: Routes = [
  { path: '', component: ListaVendehumosComponent },
  { path: 'nuevo-vendehumo', component: NuevoVendehumoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

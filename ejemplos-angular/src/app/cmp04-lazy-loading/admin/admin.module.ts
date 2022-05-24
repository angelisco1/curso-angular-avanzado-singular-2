import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelAdminComponent } from './panel-admin/panel-admin.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PanelAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: PanelAdminComponent },
    ])
  ]
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperarProfesorPage } from './recuperar-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperarProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperarProfesorPageRoutingModule {}

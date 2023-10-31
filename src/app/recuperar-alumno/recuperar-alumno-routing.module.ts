import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperarAlumnoPage } from './recuperar-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperarAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperarAlumnoPageRoutingModule {}

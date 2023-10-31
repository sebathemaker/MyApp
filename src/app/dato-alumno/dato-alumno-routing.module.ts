import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatoAlumnoPage } from './dato-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: DatoAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatoAlumnoPageRoutingModule {}

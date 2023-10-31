import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatoProfesorPage } from './dato-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: DatoProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatoProfesorPageRoutingModule {}

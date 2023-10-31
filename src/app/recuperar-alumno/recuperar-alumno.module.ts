import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarAlumnoPageRoutingModule } from './recuperar-alumno-routing.module';

import { RecuperarAlumnoPage } from './recuperar-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarAlumnoPageRoutingModule
  ],
  declarations: [RecuperarAlumnoPage]
})
export class RecuperarAlumnoPageModule {}

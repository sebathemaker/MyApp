import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatoAlumnoPageRoutingModule } from './dato-alumno-routing.module';

import { DatoAlumnoPage } from './dato-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatoAlumnoPageRoutingModule
  ],
  declarations: [DatoAlumnoPage]
})
export class DatoAlumnoPageModule {}

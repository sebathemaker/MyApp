import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarProfesorPageRoutingModule } from './recuperar-profesor-routing.module';

import { RecuperarProfesorPage } from './recuperar-profesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarProfesorPageRoutingModule
  ],
  declarations: [RecuperarProfesorPage]
})
export class RecuperarProfesorPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatoProfesorPageRoutingModule } from './dato-profesor-routing.module';

import { DatoProfesorPage } from './dato-profesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatoProfesorPageRoutingModule
  ],
  declarations: [DatoProfesorPage]
})
export class DatoProfesorPageModule {}

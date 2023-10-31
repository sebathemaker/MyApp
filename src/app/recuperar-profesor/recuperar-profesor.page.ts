import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupabaseService } from '../Service/supabase.service';

@Component({
  selector: 'app-recuperar-profesor',
  templateUrl: 'recuperar-profesor.page.html',
  styleUrls: ['recuperar-profesor.page.scss'],
})
export class RecuperarProfesorPage {
  nuevaContrasena: string = '';

  constructor(
    private route: ActivatedRoute,
    private supabaseService: SupabaseService 
  ) {}

  recuperarContrasena() {
    const profesorId =0;
    const nuevaContrasena = this.nuevaContrasena; 

    this.supabaseService.putActualizarContrasenaProfesor(profesorId, nuevaContrasena).subscribe(
      (response: any) => {
        console.log('Contraseña actualizada con éxito');
        this.mostrarNotificacion('Contraseña actualizada con éxito');
      },
      (error: any) => {
        console.error('Error al actualizar la contraseña del profesor', error);
        this.mostrarNotificacion('Error al actualizar la contraseña');
      }
    );
  }

  mostrarNotificacion(mensaje: string) {
    console.log(mensaje);
  }
}

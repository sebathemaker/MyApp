import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupabaseService } from '../Service/supabase.service';

@Component({
  selector: 'app-recuperar-alumno',
  templateUrl: 'recuperar-alumno.page.html',
  styleUrls: ['recuperar-alumno.page.scss'],
})
export class RecuperarAlumnoPage {
  nuevaContrasena: string = '';

  constructor(
    private route: ActivatedRoute,
    private supabaseService: SupabaseService 
  ) {}

  recuperarContrasena() {
    
    const alumnoId = 0; 
    const nuevaContrasena = this.nuevaContrasena; 

    this.supabaseService.putActualizarContrasenaAlumno(alumnoId, nuevaContrasena).subscribe(
      (response: any) => {
        
        console.log('Contraseña actualizada con éxito');
        this.mostrarNotificacion('Contraseña actualizada con éxito');
      },
      (error: any) => {
        console.error('Error al actualizar la contraseña del alumno', error);
        this.mostrarNotificacion('Error al actualizar la contraseña');
      }
    );
  }

  mostrarNotificacion(mensaje: string) {
    console.log(mensaje);
  }
}

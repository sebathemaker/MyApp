import { Component } from '@angular/core';
import { SupabaseService } from '../Service/supabase.service';
import { Alumno } from '../dato-alumno/alumno.models'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-alumno',
  templateUrl: 'login-alumno.page.html',
  styleUrls: ['login-alumno.page.scss'],
})
export class LoginAlumnoPage {
  correo: string = '';
  contrasena: string = '';

  constructor(private supabaseService: SupabaseService, private router: Router) {}

  login() {
    if (!this.correo || !this.contrasena) {
      console.error('Correo y contraseña son obligatorios');
      return;
    }

    this.supabaseService.getAlumnoPorCorreo(this.correo).subscribe(
      (alumnos: Alumno[]) => {
        if (alumnos.length === 1) {
          const alumno = alumnos[0];
          if (alumno.contrasena === this.contrasena) {
            
            this.router.navigate(['/menu-alumno']);
          } else {
            console.error('Contraseña incorrecta');
          }
        } else {
          console.error('Correo no encontrado');
        }
      },
      (error) => {
        console.error('Error al obtener alumno por correo', error);
      }
    );
  }

redirectToRecuperarAlumno() {
  this.router.navigateByUrl('/recuperar-alumno');
}
}
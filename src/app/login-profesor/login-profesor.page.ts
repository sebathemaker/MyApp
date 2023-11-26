// login-profesor.page.ts

import { Component } from '@angular/core';
import { SupabaseService } from '../Service/supabase.service';
import { Profesor } from '../dato-profesor/profesor.models'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-profesor',
  templateUrl: 'login-profesor.page.html',
  styleUrls: ['login-profesor.page.scss'],
})
export class LoginProfesorPage {
  email: string = '';
  contrasena: string = '';

  constructor(private supabaseService: SupabaseService, private router: Router) {}

  login() {
    if (!this.email || !this.contrasena) {
      console.error('Correo y contraseña son obligatorios');
      return;
    }

    this.supabaseService.getProfesorPorEmail(this.email).subscribe(
      (profesores: Profesor[]) => {
        if (profesores.length === 1) {
          const profesor = profesores[0];
          if (profesor.contrasena === this.contrasena) {
            
            this.supabaseService.setDetallesProfesor(profesor);

            
            this.router.navigate(['/menu-profesor']);
          } else {
            console.error('Contraseña incorrecta');
          }
        } else {
          console.error('Correo no encontrado');
        }
      },
      (error) => {
        console.error('Error al obtener profesor por correo', error);
      }
    );
  }

  redirectToRecuperarProfesor() {
    this.router.navigateByUrl('/recuperar-profesor');
  }
}

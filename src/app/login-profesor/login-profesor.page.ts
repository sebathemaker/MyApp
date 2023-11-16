import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from '../Service/supabase.service';
@Component({
  selector: 'app-login-profesor',
  templateUrl: 'login-profesor.page.html',
  styleUrls: ['login-profesor.page.scss'],
})
export class LoginProfesorPage {
  email: string = '';
  contrasena: string = '';

  constructor(private supabaseService: SupabaseService, private router: Router) { }

  login() {
    if (!this.email || !this.contrasena) {
      console.error('Correo y contraseña son obligatorios');
      return;
    }
    this.checkProfesorCredentials(this.email, this.contrasena);
  }

  redirectToMenuProfesor() {
    this.router.navigate(['/menu-profesor']);
  }

  redirectToRecuperarProfesor() {
    this.router.navigate(['/recuperar-profesor']);
  }

  private checkProfesorCredentials(email: string, contrasena: string): void {
    this.supabaseService.getProfesorIdPoremail(email).subscribe(
      (profesorId: number) => {
        this.verifyProfesorContrasena(contrasena, profesorId);
      },
      (error) => {
        console.error('Error al obtener el ID del profesor por correo', error);
      }
    );
  }

  private verifyProfesorContrasena(contrasena: string, profesorId: number): void {
    this.supabaseService.getProfesorContrasena(profesorId).subscribe(
      (contrasenaFromAPI: string) => {
        if (contrasenaFromAPI === contrasena) {
          this.redirectToMenuProfesor();
        } else {
          console.error('Contraseña incorrecta');
        }
      },
      (error) => {
        console.error('Error al obtener la contraseña del profesor', error);
      }
    );
  }
}
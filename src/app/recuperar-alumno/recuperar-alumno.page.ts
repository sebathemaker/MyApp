import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-alumno',
  templateUrl: 'recuperar-alumno.page.html',
  styleUrls: ['recuperar-alumno.page.scss'],
})
export class RecuperarAlumnoPage {
  nuevaContrasena: string = '';

  constructor(private router: Router) {}

  recuperarContrasena() {
    // Aquí debes implementar la lógica para guardar la nueva contraseña del alumno.
    // Puedes usar un servicio o realizar una llamada a una API para realizar esta operación.

    // Después de guardar la contraseña, redirige al menú correspondiente.
    this.router.navigate(['/login-alumno']);
  }
}

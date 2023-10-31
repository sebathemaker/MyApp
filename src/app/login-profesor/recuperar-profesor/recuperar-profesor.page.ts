import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-profesor',
  templateUrl: 'recuperar-profesor.page.html',
  styleUrls: ['recuperar-profesor.page.scss'],
})
export class RecuperarProfesorPage {
  nuevaContrasena: string = '';

  constructor(private router: Router) {}

  recuperarContrasena() {
    // Implementa la lógica para guardar la nueva contraseña del profesor.
    // Puedes usar un servicio o una llamada a una API para realizar esta operación.

    // Después de guardar la contraseña, redirige al menú correspondiente.
    this.router.navigate(['/login-profesor']);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-alumno',
  templateUrl: 'menu-alumno.page.html',
  styleUrls: ['menu-alumno.page.scss'],
})
export class MenuAlumnoPage {
  constructor(private router: Router) {}

  redirectToAsistenciaAlumno() {
    this.router.navigate(['/asistencia-alumno']);
  }

  redirectToDatosAlumno() {
    this.router.navigate(['/dato-alumno']);
  }

  logout() {
    this.router.navigate(['/home']);
  }
}

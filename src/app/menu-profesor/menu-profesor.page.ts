import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-profesor',
  templateUrl: 'menu-profesor.page.html',
  styleUrls: ['menu-profesor.page.scss'],
})
export class MenuProfesorPage {
  constructor(private router: Router) {}

  redirectToAsistenciaProfesor() {
    this.router.navigate(['/asistencia-profesor']);
  }

  redirectToDatosProfesor() {
    this.router.navigate(['/datos-profesor']);
  }

  logout() {
      this.router.navigate(['/home']);
  }
}

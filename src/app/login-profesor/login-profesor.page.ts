import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-profesor',
  templateUrl: 'login-profesor.page.html',
  styleUrls: ['login-profesor.page.scss'],
})
export class LoginProfesorPage {
  constructor(private router: Router) {}

  redirectToMenuProfesor() {
    this.router.navigate(['/menu-profesor']);
  }

  redirectToRecuperarProfesor() {
    this.router.navigate(['/recuperar-profesor']);
  }
}

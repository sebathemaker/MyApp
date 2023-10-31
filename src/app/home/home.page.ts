import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {}

  redirectToLogin(role: string) {
    if (role === 'alumno') {
      this.router.navigate(['/login-alumno']);
    } else if (role === 'profesor') {
      this.router.navigate(['/login-profesor']);
    }
  }
}

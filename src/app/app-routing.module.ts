import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login-alumno',
    loadChildren: () => import('./login-alumno/login-alumno.module').then( m => m.LoginAlumnoPageModule)
  },
  {
    path: 'login-profesor',
    loadChildren: () => import('./login-profesor/login-profesor.module').then( m => m.LoginProfesorPageModule)
  },
  {
    path: 'menu-profesor',
    loadChildren: () => import('./menu-profesor/menu-profesor.module').then( m => m.MenuProfesorPageModule)
  },
  {
    path: 'menu-alumno',
    loadChildren: () => import('./menu-alumno/menu-alumno.module').then( m => m.MenuAlumnoPageModule)
  },
  {
    path: 'recuperar-alumno',
    loadChildren: () => import('./recuperar-alumno/recuperar-alumno.module').then( m => m.RecuperarAlumnoPageModule)
  },
  {
    path: 'asistencia-profesor',
    loadChildren: () => import('./asistencia-profesor/asistencia-profesor.module').then( m => m.AsistenciaProfesorPageModule)
  },
  {
    path: 'asistencia-alumno',
    loadChildren: () => import('./asistencia-alumno/asistencia-alumno.module').then( m => m.AsistenciaAlumnoPageModule)
  },
  {
    path: 'dato-alumno',
    loadChildren: () => import('./dato-alumno/dato-alumno.module').then( m => m.DatoAlumnoPageModule)
  },
  {
    path: 'dato-profesor',
    loadChildren: () => import('./dato-profesor/dato-profesor.module').then( m => m.DatoProfesorPageModule)
  },
  {
    path: 'recuperar-profesor',
    loadChildren: () => import('./recuperar-profesor/recuperar-profesor.module').then( m => m.RecuperarProfesorPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alumno } from '../dato-alumno/alumno.models';
import { SupabaseService } from '../Service/supabase.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-asistencia-profesor',
  templateUrl: './asistencia-profesor.page.html',
  styleUrls: ['./asistencia-profesor.page.scss'],
})
export class AsistenciaProfesorPage{
  alumnos: any[] = [];
  seccion: any;
  profesor: any;
  clase: any;


  constructor(private supabaseService: SupabaseService) { }

  marcarAsistenciaAlumno(alumnoId: number, presente: boolean) {
    this.supabaseService.putAsistenciaalumno(alumnoId, presente).subscribe(
      (response: any) => {
        if (response) {
          console.log('Asistencia actualizada exitosamente');
          this.actualizarListaDeAlumnos();
        }
      },
      (error: any) => {
        console.error('Error al actualizar la asistencia', error);
      }
    );
  }

  actualizarListaDeAlumnos() {
    this.supabaseService.getAllAlumno().subscribe((value: Object): void => {
      const alumno = value as any[];
    },
      (error: any) => {
        console.error('Error al obtener la lista de alumnos', error);
      },
      () => {
        console.info('Fin de carga de alumnos');
      }
    );
  }

}

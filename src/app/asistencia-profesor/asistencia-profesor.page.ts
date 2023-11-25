import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../Service/supabase.service';
import { Alumno } from '../dato-alumno/alumno.models';

@Component({
  selector: 'app-asistencia-profesor',
  templateUrl: './asistencia-profesor.page.html',
  styleUrls: ['./asistencia-profesor.page.scss'],
})
export class AsistenciaProfesorPage implements OnInit {
  profesorActual: any; 

  alumnos: Alumno[] = [];
  seccion: any;
  clase: any;

  constructor(private supabaseService: SupabaseService) {}

  ngOnInit() {
    if (this.supabaseService.getProfesorActual()) {
      this.profesorActual = this.supabaseService.getProfesorActual();
      this.seccion = "1V";
      this.clase = "MATEMATICAS";
      console.log('Detalles del profesor:', this.profesorActual);
      this.actualizarListaDeAlumnos();
    } else {
      console.error('No se ha encontrado un profesor actual');
      
    }
  }

  marcarAsistenciaAlumno(alumnoId: number, presente: boolean) {
    this.supabaseService.putAsistenciaAlumno(alumnoId, presente).subscribe(
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
    const profesorId = this.profesorActual.id;

    this.supabaseService.getAlumnosPorProfesor(profesorId).subscribe(
      (alumnos: Alumno[]) => {
        this.alumnos = alumnos;
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
// SOLUCIONAR EL GETALUMNOSPORPROFESOR
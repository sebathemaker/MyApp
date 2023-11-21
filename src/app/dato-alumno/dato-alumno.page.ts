import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alumno } from '../dato-alumno/alumno.models';
import { SupabaseService } from '../Service/supabase.service';

@Component({
  selector: 'app-dato-alumno',
  templateUrl: './dato-alumno.page.html',
  styleUrls: ['./dato-alumno.page.scss'],

  
})
export class DatoAlumnoPage implements OnInit {
  alumno: Alumno | null = null;
  alumnoId: number;
  
  asignaturaLunes: string;
  asignaturaMartes: string;
  asignaturaMiercoles: string;
  asignaturaJueves: string ;
  asignaturaViernes: string;
  asignaturaSabado: string;

  constructor(
    private route: ActivatedRoute,
    private supabaseService: SupabaseService,
  ) {
    this.alumnoId = this.route.snapshot.params['alumnoId'];
   
    this.asignaturaLunes = 'asignaturalunes';
    this.asignaturaMartes = 'asignaturaMartes';
    this.asignaturaMiercoles = 'asignaturaMiercoles';
    this.asignaturaJueves = 'asignaturaJueves';
    this.asignaturaViernes = 'asignaturaViernes';
    this.asignaturaSabado = 'asignaturaSabado';
   
  }
  

  ngOnInit() {
    this.loadAlumnoData();
  }

  private loadAlumnoData(): void {
    this.supabaseService.getAlumnoById(this.alumnoId).subscribe(
      (alumno: Alumno) => {
        this.alumno = alumno;
      },
      (error) => {
        console.error(
          'Error al conseguir el alumno id',
          this.alumnoId,
          ' Error: ',
          error
        );
      }
    );
  }

  
}


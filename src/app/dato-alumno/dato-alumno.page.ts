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

  constructor(
    private route: ActivatedRoute,
    private supabaseService: SupabaseService,
  ) {
    this.alumnoId = this.route.snapshot.params['alumnoId'];
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


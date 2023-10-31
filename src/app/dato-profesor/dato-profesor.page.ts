import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profesor } from '../dato-profesor/profesor.models';
import { SupabaseService } from '../Service/supabase.service';

@Component({
  selector: 'app-dato-profesor',
  templateUrl: './dato-profesor.page.html',
  styleUrls: ['./dato-profesor.page.scss'],
})
export class DatoProfesorPage implements OnInit {
  profesor: Profesor | null = null;
  profesorId: number;

  constructor(
    private route: ActivatedRoute,
    private supabaseService: SupabaseService,
  ) {
    this.profesorId = this.route.snapshot.params['profesorId'];
  }

  ngOnInit() {
    this.loadProfesorData();
  }

  private loadProfesorData(): void {
    this.supabaseService.getProfesorById(this.profesorId).subscribe(
      (profesor: Profesor) => {
        this.profesor = profesor;
      },
      (error) => {
        console.error(
          'Error al conseguir el id del profesor ',
          this.profesorId,
          ' Error: ',
          error
        );
      }
    );
  }
}
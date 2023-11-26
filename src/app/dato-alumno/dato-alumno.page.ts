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
  alumnoActual: Alumno | null = null;

  constructor(private supabaseService: SupabaseService) { }

  ngOnInit() {
    if (this.supabaseService.getAlumnoActual()) {
      this.alumnoActual = this.supabaseService.getAlumnoActual();
    } else {

    }
  }
}




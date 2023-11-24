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
  profesorActual: Profesor | null = null;

  constructor(private supabaseService: SupabaseService) { }
  ngOnInit() {

    if (this.supabaseService.getProfesorActual()) {

      this.profesorActual = this.supabaseService.getProfesorActual();
    } else {

    }
    }
}
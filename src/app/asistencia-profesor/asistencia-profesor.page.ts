import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { SupabaseService } from '../Service/supabase.service';
import { Alumno } from '../dato-alumno/alumno.models';

@Component({
  selector: 'app-asistencia-profesor',
  templateUrl: './asistencia-profesor.page.html',
  styleUrls: ['./asistencia-profesor.page.scss'],
})
export class AsistenciaProfesorPage implements OnInit {
  
  qrCodeUrl: string= '';
  profesorActual: any;
  alumnos: Alumno[] = [];
  seccion: any;
  clase: string = "MATEMATICAS";
  supabaseUrl: string = 'https://mioynnzefjjpspojuedl.supabase.co/rest/v1/'; 

  constructor(
    private supabaseService: SupabaseService,
    private httpClient: HttpClient  
  ) {}

  ngOnInit() {
    if (this.supabaseService.getProfesorActual()) {
      this.profesorActual = this.supabaseService.getProfesorActual();
      this.seccion = "1V";
      this.clase = "MATEMATICAS";
    } else {
      console.error('No se ha encontrado un profesor actual');
    }
  }

  generarQR() {
    this.httpClient.post(this.supabaseUrl + 'asistenciaalumno', {}).subscribe(
      (response: any) => {
        this.qrCodeUrl = response.qrCodeUrl;
      },
      (error) => {
        console.error('Error generando QR:', error);
      }
    );
  }
}

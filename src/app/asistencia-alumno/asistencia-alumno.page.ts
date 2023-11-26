import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-asistencia-alumno',
  templateUrl: 'asistencia-alumno.page.html',
  styleUrls: ['asistencia-alumno.page.scss'],
})
export class AsistenciaAlumnoPage implements OnInit {
  supabaseUrl: string = 'https://mioynnzefjjpspojuedl.supabase.co/rest/v1/';

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {}

  async camaraOpen() {
    try {
      const result = await BarcodeScanner.startScan();

      if (result.hasContent) {
        console.log(result.content); 
        this.registrarAsistencia(result.content);

        const data = { codigo: result.content };
        this.postAsistenciaAlumno(data);
      }
    } catch (error) {
      console.error('Error al abrir la cámara:', error);
    }
  }

  registrarAsistencia(sessionId: string) {
    const studentId = '1'; 
    const data = { sessionId, studentId };

    this.postAsistenciaAlumno(data);
  }

  postAsistenciaAlumno(data: any) {
    this.httpClient.post(this.supabaseUrl + 'asistenciaalumno', data).subscribe(
      (response: any) => {
        console.log('Asistencia registrada correctamente', response);
      },
      (error) => {
        console.error('Error registrando asistencia', error);
      }
    );
  }
}

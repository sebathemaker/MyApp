import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { supabaseKey } from './supabase.constants';
import { Alumno } from '../dato-alumno/alumno.models';
import { Observable } from 'rxjs';
import { Profesor } from '../dato-profesor/profesor.models';

@Injectable({
    providedIn: 'root',
})
export class SupabaseService {

    private supabaseUrl = 'https://mioynnzefjjpspojuedl.supabase.co/rest/v1/';
    private supabaseKey = supabaseKey;
    private supabase = createClient(this.supabaseUrl, this.supabaseKey);
    private profesorActual: Profesor | null = null;
    constructor(private readonly httpClient: HttpClient) { }

    getAllAlumno() {
        return this.httpClient.get(this.supabaseUrl + 'alumno', {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }
    getAlumnoPoremail(email: string): Observable<Alumno[]> {
        const url = `${this.supabaseUrl}alumno?email=eq.${email}`;
        return this.httpClient.get<Alumno[]>(url, {
            headers: new HttpHeaders({ apikey: this.supabaseKey }),
        });
    }
    getAlumnoById(alumnoId: number): Observable<Alumno> {
        return this.httpClient.get<Alumno>(`${this.supabaseUrl}alumno/${alumnoId}`, {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }



    postAlumno() {
        return this.httpClient.post(this.supabaseUrl + 'alumno', null, {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }

    putAlumno() {
        return this.httpClient.put(this.supabaseUrl + 'alumno', null, {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }
    putActualizarContrasenaAlumno(alumnoId: number, nuevaContrasena: string): Observable<any> {
        const data = { contrasena: nuevaContrasena };
        return this.httpClient.put<any>(`${this.supabaseUrl}alumno/${alumnoId}`, data, {
            headers: new HttpHeaders({ apikey: this.supabaseKey }),
        });
    }
    getAllProfesor() {
        return this.httpClient.get(this.supabaseUrl + 'profesor', {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }
    getProfesorById(profesorId: number): Observable<Profesor> {
        return this.httpClient.get<Profesor>(`${this.supabaseUrl}profesor/${profesorId}`, {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }
    getProfesoremail(profesorId: number): Observable<string> {
        return this.httpClient.get<string>(`${this.supabaseUrl}profesor/${profesorId}`, {
            headers: new HttpHeaders({ apikey: this.supabaseKey }),
            params: { fields: 'correo' }
        });
    }
    getProfesorContrasena(profesorId: number): Observable<string> {
        return this.httpClient.get<string>(`${this.supabaseUrl}profesor/${profesorId}`, {
            headers: new HttpHeaders({ apikey: this.supabaseKey }),
            params: { fields: 'contrasena' }
        });
    }
    getProfesorPorEmail(email: string): Observable<Profesor[]> {
        const url = `${this.supabaseUrl}profesor?email=eq.${email}`;
        return this.httpClient.get<Profesor[]>(url, {
            headers: new HttpHeaders({ apikey: this.supabaseKey }),
        });
    }
    getDetallesProfesor(profesorId: number): Observable<Profesor> {
        const url = `${this.supabaseUrl}profesor/${profesorId}`;
        return this.httpClient.get<Profesor>(url, {
            headers: new HttpHeaders({ apikey: this.supabaseKey }),
        });
    }

    setDetallesProfesor(detallesProfesor: Profesor) {
        this.profesorActual = detallesProfesor;
    }

    getProfesorActual(): Profesor | null {
        return this.profesorActual;
    }

    putActualizarContrasenaProfesor(profesorId: number, nuevaContrasena: string): Observable<any> {
        const data = { contrasena: nuevaContrasena };
        return this.httpClient.put<any>(`${this.supabaseUrl}profesor/${profesorId}`, data, {
            headers: new HttpHeaders({ apikey: this.supabaseKey }),
        });
    }

    postProfesor() {
        return this.httpClient.post(this.supabaseUrl + 'profesor', null, {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }

    putProfesor() {
        return this.httpClient.put(this.supabaseUrl + 'profesor', null, {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }

    getAllAsistencia() {
        return this.httpClient.get(this.supabaseUrl + 'asistencia', {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }

    postAsistencia() {
        return this.httpClient.post(this.supabaseUrl + 'asistencia', null, {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }

    putAsistenciaAlumno(alumnoId: number, presente: boolean): Observable<any> {
        const url = `${this.supabaseUrl}asistenciaalumno?id=eq.${alumnoId}`;
        const body = { presente: presente };

        return this.httpClient.patch(url, body, {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }
    getAlumnosPorProfesor(profesorId: number): Observable<Alumno[]> {
        const url = `${this.supabaseUrl}alumno?profesor_id=eq.${profesorId}`;
        return this.httpClient.get<Alumno[]>(url, {
            headers: new HttpHeaders({ apikey: this.supabaseKey }),
        });
    }

    getAllAsistenciaAlumno() {
        return this.httpClient.get(this.supabaseUrl + 'asistenciaalumno', {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }

    postAsistenciaAlumno() {
        return this.httpClient.post(this.supabaseUrl + 'asistenciaalumno', null, {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }


    getAllSeccion() {
        return this.httpClient.get(this.supabaseUrl + 'seccion', {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }

    postSeccion() {
        return this.httpClient.post(this.supabaseUrl + 'seccion', null, {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }

    putSeccion() {
        return this.httpClient.put(this.supabaseUrl + 'seccion', null, {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }

    getAllClase() {
        return this.httpClient.get(this.supabaseUrl + 'clase', {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }

    postClase() {
        return this.httpClient.post(this.supabaseUrl + 'clase', null, {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }

    putClase() {
        return this.httpClient.put(this.supabaseUrl + 'clase', null, {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }

    getAllSeccionAlumno() {
        return this.httpClient.get(this.supabaseUrl + 'seccionalumno', {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }

    postSeccionAlumno() {
        return this.httpClient.post(this.supabaseUrl + 'seccionalumno', null, {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }

    putSeccionAlumno() {
        return this.httpClient.put(this.supabaseUrl + 'seccionalumno', null, {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }
}
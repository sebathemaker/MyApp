import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperarAlumnoPage } from './recuperar-alumno.page';

describe('RecuperarAlumnoPage', () => {
  let component: RecuperarAlumnoPage;
  let fixture: ComponentFixture<RecuperarAlumnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecuperarAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DatoAlumnoPage } from './dato-alumno.page';

describe('DatoAlumnoPage', () => {
  let component: DatoAlumnoPage;
  let fixture: ComponentFixture<DatoAlumnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DatoAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

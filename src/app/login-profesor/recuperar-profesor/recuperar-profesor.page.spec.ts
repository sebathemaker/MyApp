import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperarProfesorPage } from './recuperar-profesor.page';

describe('RecuperarProfesorPage', () => {
  let component: RecuperarProfesorPage;
  let fixture: ComponentFixture<RecuperarProfesorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecuperarProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

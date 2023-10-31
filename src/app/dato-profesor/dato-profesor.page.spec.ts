import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatoProfesorPage } from './dato-profesor.page';

describe('DatoProfesorPage', () => {
  let component: DatoProfesorPage;
  let fixture: ComponentFixture<DatoProfesorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DatoProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

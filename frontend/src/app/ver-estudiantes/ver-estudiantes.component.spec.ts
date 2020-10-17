import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEstudiantesComponent } from './ver-estudiantes.component';

describe('VerEstudiantesComponent', () => {
  let component: VerEstudiantesComponent;
  let fixture: ComponentFixture<VerEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerEstudiantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

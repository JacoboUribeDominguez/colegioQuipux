import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantesGruposComponent } from './estudiantes-grupos.component';

describe('EstudiantesGruposComponent', () => {
  let component: EstudiantesGruposComponent;
  let fixture: ComponentFixture<EstudiantesGruposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudiantesGruposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiantesGruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

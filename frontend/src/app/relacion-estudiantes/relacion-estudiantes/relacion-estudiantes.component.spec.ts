import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacionEstudiantesComponent } from './relacion-estudiantes.component';

describe('RelacionEstudiantesComponent', () => {
  let component: RelacionEstudiantesComponent;
  let fixture: ComponentFixture<RelacionEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelacionEstudiantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelacionEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

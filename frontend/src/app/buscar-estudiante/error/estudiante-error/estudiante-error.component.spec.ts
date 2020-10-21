import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteErrorComponent } from './estudiante-error.component';

describe('EstudianteErrorComponent', () => {
  let component: EstudianteErrorComponent;
  let fixture: ComponentFixture<EstudianteErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudianteErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudianteErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

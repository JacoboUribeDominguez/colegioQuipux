import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarMateriaComponent } from './agregar-materia.component';

describe('AgregarMateriaComponent', () => {
  let component: AgregarMateriaComponent;
  let fixture: ComponentFixture<AgregarMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarMateriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

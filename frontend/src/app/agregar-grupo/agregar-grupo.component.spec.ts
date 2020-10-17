import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarGrupoComponent } from './agregar-grupo.component';

describe('AgregarGrupoComponent', () => {
  let component: AgregarGrupoComponent;
  let fixture: ComponentFixture<AgregarGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarGrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

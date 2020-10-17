import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarGrupoComponent } from './buscar-grupo.component';

describe('BuscarGrupoComponent', () => {
  let component: BuscarGrupoComponent;
  let fixture: ComponentFixture<BuscarGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarGrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

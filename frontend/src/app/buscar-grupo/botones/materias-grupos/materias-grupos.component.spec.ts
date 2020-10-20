import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasGruposComponent } from './materias-grupos.component';

describe('MateriasGruposComponent', () => {
  let component: MateriasGruposComponent;
  let fixture: ComponentFixture<MateriasGruposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriasGruposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriasGruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

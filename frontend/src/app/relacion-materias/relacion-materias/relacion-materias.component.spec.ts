import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacionMateriasComponent } from './relacion-materias.component';

describe('RelacionMateriasComponent', () => {
  let component: RelacionMateriasComponent;
  let fixture: ComponentFixture<RelacionMateriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelacionMateriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelacionMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

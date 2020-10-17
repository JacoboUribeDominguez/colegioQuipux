import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerGruposComponent } from './ver-grupos.component';

describe('VerGruposComponent', () => {
  let component: VerGruposComponent;
  let fixture: ComponentFixture<VerGruposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerGruposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerGruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

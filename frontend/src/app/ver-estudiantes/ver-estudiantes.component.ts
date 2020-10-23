import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudiante } from '../model/Estudiante';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-ver-estudiantes',
  templateUrl: './ver-estudiantes.component.html',
  styleUrls: ['./ver-estudiantes.component.css']
})
export class VerEstudiantesComponent implements OnInit {

  estudiantes:Estudiante[];
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(){
    this.onCharge();
  }

  onCharge(){
    this.service.getEstudiantes()
    .subscribe(data => {
      this.estudiantes=data;
    });
  }

  onDelete(codigo:number){
    alert('¿Esta seguro que desea eliminar este estudiante?');
    this.service.deleteEstudiante(codigo).subscribe(data => {
      alert('Estudiante eliminado');
      this.onCharge();
      this.NavegarHaciaInicio();
    },
    err =>{
      alert('ERROR: No se pudo eliminar la materia');
    })
  }

  NavegarHaciaInicio(){
    this.router.navigate(['/']);
  }

}

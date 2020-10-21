import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudiante } from '../model/Estudiante';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-buscar-estudiante',
  templateUrl: './buscar-estudiante.component.html',
  styleUrls: ['./buscar-estudiante.component.css']
})
export class BuscarEstudianteComponent implements OnInit {

  estudiante: Estudiante;
  codigo = null;
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(){
  }

  onSubmit(){
    this.service.getEstudiante(this.codigo)
    .subscribe(data => {
      this.estudiante = data;
    },
    err => {
      window.alert(`No se pudo encontrar el estudiante ${this.codigo}`);
      this.router.navigate['/buscarEstudiante-error'];
      /*this.toastr.error("No se ha encontrado el estudiante", 'Fail', {
        timeOut: 3000, positionClass: 'toast-top-center',
      });
      
    */})
  }

  NavegarHaciaInicio(){
    this.router.navigate(['/']);
  }

}

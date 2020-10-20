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
    })
  }

  NavegarHaciaInicio(){
    this.router.navigate(['/']);
  }

}

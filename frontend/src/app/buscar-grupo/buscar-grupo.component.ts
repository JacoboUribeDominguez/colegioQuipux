import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Grupo } from '../model/Grupo';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-buscar-grupo',
  templateUrl: './buscar-grupo.component.html',
  styleUrls: ['./buscar-grupo.component.css']
})
export class BuscarGrupoComponent implements OnInit {

  constructor(private router: Router, private service:ServiceService) { }

  codigo=null;
  grupo: Grupo;

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.getGrupo(this.codigo)
    .subscribe(data => {
      this.grupo = data;
    },
    err => {
      window.alert(`No se pudo encontrar el grupo ${this.codigo}`);
    });
  }

  NavegarHaciaInicio(){
    this.router.navigate(['/']);
  }

}

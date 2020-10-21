import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Materias } from '../model/Materias';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-agregar-grupo',
  templateUrl: './agregar-grupo.component.html',
  styleUrls: ['./agregar-grupo.component.css']
})
export class AgregarGrupoComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  codigo: String = "";
  nombre: String = "";
  profesor: number = null;
  grado6: String; 
  grado7: String; 
  grado8: String; 
  grado9: String; 
  grado10: String; 
  grado11: String;
  grados: String = "";

  ngOnInit(): void {
  }

  NavegarHaciaInicio(){
    this.router.navigate(['/']);
  }

}

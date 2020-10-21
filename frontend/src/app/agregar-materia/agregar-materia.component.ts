import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeout } from 'rxjs-compat/operator/timeout';
import { Materias } from '../model/Materias';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-agregar-materia',
  templateUrl: './agregar-materia.component.html',
  styleUrls: ['./agregar-materia.component.css']
})
export class AgregarMateriaComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

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
  NavegarHaciaInicio(){
    this.router.navigate(['/']);
  }

  onCreate(): void{
    if(this.grado6){
      if (this.grados === "") {
        this.grados="6";
      }else{
        this.grados+=",6";
      }
    }
    if(this.grado7){
      if (this.grados === "") {
        this.grados="7";
      }else{
        this.grados+=",7";
      }
    }
    if(this.grado8){
      if (this.grados === "") {
        this.grados= "8";
      }else{
        this.grados= this.grados + ",8";
      }
    }
    if(this.grado9){
      if (this.grados === "") {
        this.grados= "9";
      }else{
        this.grados= this.grados + ",9";
      }
    }
    if(this.grado10){
      if (this.grados === "") {
        this.grados= "10";
      }else{
        this.grados= this.grados + ",10";
      }
    }
    if(this.grado11){
      if (this.grados === "") {
        this.grados = "11";
      }else{
        this.grados= this.grados + ",11";
      }
    } 
    const materia: Materias = new Materias(this.codigo, this.nombre, this.profesor, this.grados);
    this.service.postMaterias(materia).subscribe(data => {
      alert("Materia Creada");
    });
    
  }
}

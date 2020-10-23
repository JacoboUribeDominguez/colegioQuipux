import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudiante } from '../model/Estudiante';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-agregar-estudiante',
  templateUrl: './agregar-estudiante.component.html',
  styleUrls: ['./agregar-estudiante.component.css']
})
export class AgregarEstudianteComponent implements OnInit {


  codigo:number = 1;
  nombre: String;
  tipodocumento: String;
  numdocumento: number;
  ciudad: String;
  Masculino: String;
  Femenino: String;
  Null: String;
  genero: String = "";
  direccion: String;
  telefono: number;
  celular: number;
  correo: String;

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    if(this.Masculino){
      this.genero = "Masculino"
    }
  
    if(this.Femenino){
      this.genero = "Femenino"
    }
  
    if(this.Null){
      this.genero = "Null"
    }
    const estudiante: Estudiante = new Estudiante(this.codigo, this.nombre, this.tipodocumento, this.numdocumento, this.ciudad, this.genero, this.direccion, this.telefono, this.celular, this.correo);
    
    this.service.postEstudiantes(estudiante).subscribe(data => {
      alert("Estudiante Creado");
      this.NavegarHaciaInicio();
    },
    err => {
      alert("No se pudo crear el estudiante")
    });
    
  }

  NavegarHaciaInicio(){
    this.router.navigate(['/']);
  }

}

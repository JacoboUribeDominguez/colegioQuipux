import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navegarHaciaVerEstudiantes(){
    this.router.navigate(['/verEstudiantes']);
  }

  navegarHaciaBuscarEstudiante(){
    this.router.navigate(['/buscarEstudiante']);
  }

  navegarHaciaAgregarEstudiante(){
    this.router.navigate(['/agregarEstudiante']);
  }

  navegarHaciaEditarEstudiante(){
    this.router.navigate(['/editarEstudiante']);
  }

  navegarHaciaEliminarEstudiante(){
    this.router.navigate(['/editarEstudiante']);
  }

  //

  navegarHaciaVerGrupos(){
    this.router.navigate(['/verGrupos']);
  }

  navegarHaciaBuscarGrupo(){
    this.router.navigate(['/buscarGrupo']);
  }

  navegarHaciaAgregarGrupo(){
    this.router.navigate(['/agregarGrupo']);
  }

  navegarHaciaEditarGrupo(){
    this.router.navigate(['/editarGrupo']);
  }

  navegarHaciaEliminarGrupo(){
    this.router.navigate(['/eliminarGrupo']);
  }

  //

  navegarHaciaVerMaterias(){
    this.router.navigate(['/verMaterias']);
  }

  navegarHaciaBuscarMateria(){
    this.router.navigate(['/buscarMateria']);
  }

  navegarHaciaAgregarMateria(){
    this.router.navigate(['/agregarMateria']);
  }

  navegarHaciaEditarMateria(){
    this.router.navigate(['/editarMateria']);
  }

  navegarHaciaEliminarMateria(){
    this.router.navigate(['/eliminarMateria']);
  }
}


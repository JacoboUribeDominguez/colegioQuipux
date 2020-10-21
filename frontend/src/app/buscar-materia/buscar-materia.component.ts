import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Materias } from '../model/Materias';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-buscar-materia',
  templateUrl: './buscar-materia.component.html',
  styleUrls: ['./buscar-materia.component.css']
})
export class BuscarMateriaComponent implements OnInit {

  constructor(private router: Router, private service:ServiceService) { }

  codigo:String
  materia:Materias

  ngOnInit(): void {
  }

  onDelete(){
    alert('¿Esta seguro que desea eliminar esta materia?');
    this.service.deleteMateria(this.codigo).subscribe(data => {
      alert('Materia eliminada');
      this.onSubmit();
    },
    err =>{
      alert('ERROR: No se pudo eliminar la materia');
    })
  }

  onSubmit(){
    this.service.getMateria(this.codigo)
    .subscribe(data => {
      this.materia = data;
    },
    err => {
      window.alert(`No se pudo encontrar la materia ${this.codigo}`);
    });
  }
  NavegarHaciaInicio(){
    this.router.navigate(['/']);
  }
}

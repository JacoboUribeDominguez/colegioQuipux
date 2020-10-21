import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Materias } from '../model/Materias';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-ver-materias',
  templateUrl: './ver-materias.component.html',
  styleUrls: ['./ver-materias.component.css']
})
export class VerMateriasComponent implements OnInit {

  materias:Materias[];

  constructor(private service : ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.onCharge();
  }

  onCharge(){
    this.service.getMaterias()
    .subscribe(data => {
      this.materias=data;
    });
  }

  onDelete(codigo:String){
    alert('¿Esta seguro que desea eliminar esta materia?');
    this.service.deleteMateria(codigo).subscribe(data => {
      alert('Materia eliminada');
      this.onCharge();
    },
    err =>{
      alert('ERROR: No se pudo eliminar la materia');
    })
  }

  NavegarHaciaInicio(){
    this.router.navigate(['/']);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Materias } from '../../model/Materias';
import { RelacionMaetriasGrupo } from '../../model/RelacionMateriasGrupo';

@Component({
  selector: 'app-relacion-materias',
  templateUrl: './relacion-materias.component.html',
  styleUrls: ['./relacion-materias.component.css']
})
export class RelacionMateriasComponent implements OnInit {

  grupo:number;
  relaciones:RelacionMaetriasGrupo[];
  nombres:Materias[];
  constructor(private router:Router, private activateRoute:ActivatedRoute, private service:ServiceService) { }

  ngOnInit(): void {
    this.grupo = this.activateRoute.snapshot.params.id;
    this.onCharge();

    this.service.getMaterias()
    .subscribe(data => {
      this.nombres = data;
    },
    err => {
      alert('no se pudo cargar la información');
    });
  }

  onCharge(){
    this.service.getRelaciones(this.grupo)
    .subscribe(data => {
      this.relaciones=data;
    },
    err => {
      alert('no se pudo cargar la información');
    });
  }

  VolverHaciaGrupos(){
    this.router.navigate(['/verGrupos']);
  }
}

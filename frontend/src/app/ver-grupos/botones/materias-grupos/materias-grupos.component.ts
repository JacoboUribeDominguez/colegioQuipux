import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { RelacionMaetriasGrupo } from 'src/app/model/RelacionMateriasGrupo';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-materias-grupos',
  templateUrl: './materias-grupos.component.html',
  styleUrls: ['./materias-grupos.component.css']
})
export class MateriasGruposComponent implements OnInit {

  grupo:number;
  relaciones:RelacionMaetriasGrupo[];
  constructor(private router:Router, private activateRoute:ActivatedRoute, private service:ServiceService) { }

  ngOnInit(): void {
    this.grupo = this.activateRoute.snapshot.params.id;
    this.service.getRelaciones(this.grupo)
    .subscribe(data => {
      this.relaciones=data;
    });
  }

  VolverHaciaGrupos(){
    this.router.navigate(['/verGrupos']);
  }
}

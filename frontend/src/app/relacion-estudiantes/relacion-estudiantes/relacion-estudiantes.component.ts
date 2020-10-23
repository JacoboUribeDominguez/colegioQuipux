import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RelacionEstudiantesGrupo } from 'src/app/model/RelacionEstudiantesGrupo';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-relacion-estudiantes',
  templateUrl: './relacion-estudiantes.component.html',
  styleUrls: ['./relacion-estudiantes.component.css']
})
export class RelacionEstudiantesComponent implements OnInit {

  grupo:number;
  relaciones:RelacionEstudiantesGrupo[];
  constructor(private router:Router, private activateRoute:ActivatedRoute, private service:ServiceService) { }

  ngOnInit(): void {
    this.grupo = this.activateRoute.snapshot.params.id;
    this.onCharge();
  }

  
  onCharge(){
    this.service.getRelaciones2(this.grupo)
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

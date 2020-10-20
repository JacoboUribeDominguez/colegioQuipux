import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-materias-grupos',
  templateUrl: './materias-grupos.component.html',
  styleUrls: ['./materias-grupos.component.css']
})
export class MateriasGruposComponent implements OnInit {

  id:number;

  constructor(private router:Router, private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params.id;
  }

  VolverHaciaGrupos(){
    this.router.navigate(['/verGrupos']);
  }
}

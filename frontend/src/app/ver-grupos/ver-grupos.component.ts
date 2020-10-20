import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Grupo } from '../model/Grupo';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-ver-grupos',
  templateUrl: './ver-grupos.component.html',
  styleUrls: ['./ver-grupos.component.css']
})
export class VerGruposComponent implements OnInit {

  grupos:Grupo[];
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.service.getGrupos()
    .subscribe(data => {
      this.grupos=data;
    });
  }

  NavegarHaciaInicio(){
    this.router.navigate(['/']);
  }

  NavegarHaciaEG(){
    this.router.navigate(['/verGrupo/estudiantes-grupos']);
  }
}

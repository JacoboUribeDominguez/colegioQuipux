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
    this.service.getMaterias()
    .subscribe(data => {
      this.materias=data;
    });
  }

  NavegarHaciaInicio(){
    this.router.navigate(['/']);
  }
}

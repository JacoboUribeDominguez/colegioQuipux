import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-estudiante',
  templateUrl: './agregar-estudiante.component.html',
  styleUrls: ['./agregar-estudiante.component.css']
})
export class AgregarEstudianteComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  NavegarHaciaInicio(){
    this.router.navigate(['/']);
  }

}

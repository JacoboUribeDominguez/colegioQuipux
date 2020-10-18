import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-estudiantes',
  templateUrl: './ver-estudiantes.component.html',
  styleUrls: ['./ver-estudiantes.component.css']
})
export class VerEstudiantesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  NavegarHaciaInicio(){
    this.router.navigate(['/']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudiante-error',
  templateUrl: './estudiante-error.component.html',
  styleUrls: ['./estudiante-error.component.css']
})
export class EstudianteErrorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  VolverHaciaBuscarEstudiante(){
    this.router.navigate(['/buscarEstudiante']);
  }

}

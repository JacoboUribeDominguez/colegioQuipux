import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-grupos',
  templateUrl: './ver-grupos.component.html',
  styleUrls: ['./ver-grupos.component.css']
})
export class VerGruposComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  NavegarHaciaInicio(){
    this.router.navigate(['/']);
  }

}

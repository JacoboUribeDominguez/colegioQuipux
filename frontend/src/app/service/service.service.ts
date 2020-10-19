import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estudiante } from '../model/Estudiante';
import { Grupo } from '../model/Grupo';
import { Materias } from '../model/Materias';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor(private http:HttpClient) { }

  getEstudiantes(){
    return this.http.get<Estudiante[]>('http://localhost:8080/estudiantes/listarEstudiantes');
  }

  getGrupos(){
    return this.http.get<Grupo[]>('http://localhost:8080/grupos/listarGrupos');
  }

  getMaterias(){
    return this.http.get<Materias[]>('http://localhost:8080/materias/listarMaterias');
  }

}

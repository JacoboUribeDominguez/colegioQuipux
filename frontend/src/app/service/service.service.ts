import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Estudiante } from '../model/Estudiante';
import { Observable } from 'rxjs/Observable';
import { Grupo } from '../model/Grupo';
import { Materias } from '../model/Materias';
import { RelacionMaetriasGrupo } from '../model/RelacionMateriasGrupo';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor(private http:HttpClient) { }

  getEstudiantes(){
    return this.http.get<Estudiante[]>('http://localhost:8080/estudiantes/listarEstudiantes');
  }

  getEstudiante(codigo: number){
    return this.http.get<Estudiante>(`http://localhost:8080/estudiantes/buscarEstudiante/${codigo}`);
  }

  getGrupos(){
    return this.http.get<Grupo[]>('http://localhost:8080/grupos/listarGrupos');
  }

  getGrupo(codigo: number){
    return this.http.get<Grupo>(`http://localhost:8080/grupos/buscarGrupo/${codigo}`)
  }

  getMaterias(){
    return this.http.get<Materias[]>('http://localhost:8080/materias/listarMaterias');
  }

  getMateria(codigo: String){
    return this.http.get<Materias>(`http://localhost:8080/materias/buscarMateria/${codigo}`)
  }

  postMaterias(materia: Materias):Observable<Materias>{
    return this.http.post<Materias>('http://localhost:8080/materias/crearMateria', materia);
  }

  deleteMateria(codigo: String): Observable<String>{
    return this.http.delete<String>(`http://localhost:8080/materias/eliminarMateria/${codigo}`)
  }

  getRelaciones(grupo: number){
    return this.http.get<RelacionMaetriasGrupo[]>(`http://localhost:8080/rmateriasgrupo/buscarEstudiante/${grupo}`);
  }

}

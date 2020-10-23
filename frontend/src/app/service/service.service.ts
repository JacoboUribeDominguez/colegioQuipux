import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Estudiante } from '../model/Estudiante';
import { Observable } from 'rxjs/Observable';
import { Grupo } from '../model/Grupo';
import { Materias } from '../model/Materias';
import { RelacionMaetriasGrupo } from '../model/RelacionMateriasGrupo';
import { RelacionEstudiantesGrupo } from '../model/RelacionEstudiantesGrupo';
import { PostGrupo } from '../model/postGrupo';

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

  postEstudiantes(estudiante: Estudiante):Observable<Estudiante>{
    return this.http.post<Estudiante>('http://localhost:8080/estudiantes/crearEstudiante', estudiante);;
  }

  deleteEstudiante(codigo: number): Observable<number>{
    return this.http.delete<number>(`http://localhost:8080/estudiantes/eliminarEstudiante/${codigo}`)
  }

  getGrupos(){
    return this.http.get<Grupo[]>('http://localhost:8080/grupos/listarGrupos');
  }

  getGrupo(codigo: number){
    return this.http.get<Grupo>(`http://localhost:8080/grupos/buscarGrupo/${codigo}`)
  }

  postGrupo(grupo : Grupo):Observable<Grupo>{
    return this.http.post<Grupo>('http://localhost:8080/grupos/crearGrupo', grupo);
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

  getRelacionesMaterias(){
    return this.http.get<RelacionMaetriasGrupo[]>(`http://localhost:8080/rmateriasgrupo/buscarRelaciones`);
  }

  getRelaciones(grupo: number){
    return this.http.get<RelacionMaetriasGrupo[]>(`http://localhost:8080/rmateriasgrupo/buscarRelacion/${grupo}`);
  }

  getRelaciones2(grupo: number){
    return this.http.get<RelacionEstudiantesGrupo[]>(`http://localhost:8080/restudiantesgrupo/buscarRelacion/${grupo}`);
  }

  getRelacionesEstudiantes(){
    return this.http.get<RelacionEstudiantesGrupo[]>('http://localhost:8080/restudiantesgrupo/buscarRelacionEstudiantesGrupo');
  }

  postRelacionMateria(relaciones: RelacionMaetriasGrupo):Observable<RelacionMaetriasGrupo>{
    return this.http.post<RelacionMaetriasGrupo>('http://localhost:8080/rmateriasgrupo/crearRelacionMaterias', relaciones);
  }

  postRelacionEstudiante(relacion: RelacionEstudiantesGrupo):Observable<RelacionEstudiantesGrupo>{
    return this.http.post<RelacionEstudiantesGrupo>('http://localhost:8080/restudiantesgrupo/crearRelacionEstudiantes', relacion);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estudiante } from '../model/Estudiante';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor(private http:HttpClient) { }

  url='/colegioquipux2/estudiantes';

  getEstudiantes(){
    return this.http.get<Estudiante[]>(this.url);
  }

}

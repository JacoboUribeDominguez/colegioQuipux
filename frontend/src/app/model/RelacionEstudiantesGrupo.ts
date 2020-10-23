import { Estudiante } from './Estudiante';

export class RelacionEstudiantesGrupo{
    codigo: number;
    grupo: number;
    estudiantes: Number;
    constructor(codigo : number, estudiantes : Number, grupo : number){
        this.codigo = codigo;
        this.estudiantes = estudiantes;
        this.grupo = grupo;
    }
}
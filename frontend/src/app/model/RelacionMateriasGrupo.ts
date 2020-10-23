import { Materias } from './Materias';

export class RelacionMaetriasGrupo{
    codigo: number = 0;
    grupo: number;
    materia: String;
    constructor(codigo: number, materia : String, grupo : number){
        this.codigo = codigo;
        this.grupo = grupo
        this.materia = materia;
    }
}
export class Grupo{
    codigo: number;
    grado: number;
    profesor: number;
    jornada: String;

    constructor(grado : number, profesor: number, jornada : String){
        this.grado = grado;
        this.profesor = profesor;
        this.jornada = jornada;
    }
}
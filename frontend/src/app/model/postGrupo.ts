import { Grupo } from './Grupo';
import { RelacionEstudiantesGrupo } from './RelacionEstudiantesGrupo';
import { RelacionMaetriasGrupo } from './RelacionMateriasGrupo';

export class PostGrupo{
    grupo: Grupo;
    relacionEstudiantes: RelacionEstudiantesGrupo[];
    relacionMaterias: RelacionMaetriasGrupo[];

    constructor(grupo : Grupo, relacionEstudiantes : RelacionEstudiantesGrupo[], relacionMaterias : RelacionMaetriasGrupo[]){
        this.grupo = grupo;
        this.relacionEstudiantes = relacionEstudiantes;
        this.relacionMaterias = relacionMaterias;
    }
}
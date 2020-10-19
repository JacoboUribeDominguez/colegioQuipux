
package com.colegioquipux2.colegioquipux2;

import java.util.List;

public interface EstudianteService {
    List<Estudiante>listar();
    Estudiante listarCodigoEstudiante(int codigoEstudiante);
    Estudiante agregar(Estudiante e);
    Estudiante editar(Estudiante e);
    Estudiante eliminar(Estudiante e);
}

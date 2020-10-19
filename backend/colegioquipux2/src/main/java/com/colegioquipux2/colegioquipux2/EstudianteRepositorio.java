
package com.colegioquipux2.colegioquipux2;

import java.util.List;
import org.springframework.data.repository.Repository;

public interface EstudianteRepositorio extends Repository<Estudiante, Integer>{
    List<Estudiante>findAll();
    Estudiante findBycodigoEstudiante(int codigoEstudiante);
    Estudiante save(Estudiante e);
    void delete(Estudiante e);
}


package com.colegioquipux2.colegioquipux2.repositorios;

import com.colegioquipux2.colegioquipux2.entidades.Estudiante;
import java.util.List;
import org.springframework.data.repository.Repository;

public interface EstudianteRepositorio extends Repository<Estudiante, Integer>{
    List<Estudiante>findAll();
    //Estudiante findByCodigoEstudiante(int codigoEstudiante);
    //Estudiante save(Estudiante e);
    //void delete(Estudiante e);
}

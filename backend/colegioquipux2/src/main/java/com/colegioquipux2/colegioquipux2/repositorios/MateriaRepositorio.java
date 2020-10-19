package com.colegioquipux2.colegioquipux2.repositorios;

import com.colegioquipux2.colegioquipux2.entidades.Materia;
import java.util.List;
import org.springframework.data.repository.Repository;

public interface MateriaRepositorio extends Repository<Materia, Integer>{
    List<Materia>findAll();
}

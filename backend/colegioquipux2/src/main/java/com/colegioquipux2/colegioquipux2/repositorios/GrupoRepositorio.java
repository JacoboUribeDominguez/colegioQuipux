
package com.colegioquipux2.colegioquipux2.repositorios;

import com.colegioquipux2.colegioquipux2.entidades.Grupo;
import java.util.List;
import org.springframework.data.repository.Repository;

public interface GrupoRepositorio extends Repository<Grupo, Integer>{
    List<Grupo>findAll();
}

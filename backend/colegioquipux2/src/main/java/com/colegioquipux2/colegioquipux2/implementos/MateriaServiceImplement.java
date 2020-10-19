package com.colegioquipux2.colegioquipux2.implementos;

import com.colegioquipux2.colegioquipux2.repositorios.MateriaRepositorio;
import com.colegioquipux2.colegioquipux2.entidades.Materia;
import com.colegioquipux2.colegioquipux2.servicios.MateriaService;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class MateriaServiceImplement implements MateriaService{
    @Autowired
    private MateriaRepositorio repositorio;
    
    @Override
    public List<Materia> listar() {
        return repositorio.findAll();
    }
}

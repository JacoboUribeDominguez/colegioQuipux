package com.colegioquipux2.colegioquipux2.implementos;

import com.colegioquipux2.colegioquipux2.repositorios.GrupoRepositorio;
import com.colegioquipux2.colegioquipux2.entidades.Grupo;
import com.colegioquipux2.colegioquipux2.servicios.GrupoService;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class GrupoServiceImplement implements GrupoService{
    @Autowired
    private GrupoRepositorio repositorio;
    
    @Override
    public List<Grupo> listar() {
        return repositorio.findAll();
    }
}


package com.colegioquipux2.colegioquipux2.implementos;

import com.colegioquipux2.colegioquipux2.repositorios.EstudianteRepositorio;
import com.colegioquipux2.colegioquipux2.entidades.Estudiante;
import com.colegioquipux2.colegioquipux2.servicios.EstudianteService;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class EstudianteServiceImplement implements EstudianteService{

    @Autowired
    private EstudianteRepositorio repositorio;
    
    @Override
    public List<Estudiante> listar() {
        return repositorio.findAll();
    }
/*
    @Override
    public Estudiante listarCodigoEstudiante(int codigoEstudiante) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Estudiante agregar(Estudiante e) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Estudiante editar(Estudiante e) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Estudiante eliminar(Estudiante e) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    */
}


package com.colegioquipux2.colegioquipux2;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/estudiantes"})
@ResponseBody
public class controlador {
    
    @Autowired
    EstudianteService service;
    
    @GetMapping
    public List<Estudiante>listar(){
        return service.listar();
    }
}

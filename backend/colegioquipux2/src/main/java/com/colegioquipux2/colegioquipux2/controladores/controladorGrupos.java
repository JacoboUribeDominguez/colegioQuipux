
package com.colegioquipux2.colegioquipux2.controladores;

import com.colegioquipux2.colegioquipux2.entidades.Grupo;
import com.colegioquipux2.colegioquipux2.implementos.GrupoServiceImplement;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/grupos"})
@ResponseBody
public class controladorGrupos {
    
    @Autowired
    GrupoServiceImplement serviceGrupos;
    
    @GetMapping("/listarGrupos")
    public List<Grupo>listarGrupos(){
        return serviceGrupos.listar();
    }
}

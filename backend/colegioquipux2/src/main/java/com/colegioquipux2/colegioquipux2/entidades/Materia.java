package com.colegioquipux2.colegioquipux2.entidades;

import javax.persistence.*;

@Entity
@Table(name = "materias")
public class Materia {
    @Id
    private String codigo;
    private String nombre;
    private String profesor;
    private String grados;

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getProfesor() {
        return profesor;
    }

    public void setProfesor(String profesor) {
        this.profesor = profesor;
    }

    public String getGrados() {
        return grados;
    }

    public void setGrados(String grados) {
        this.grados = grados;
    }
    
}


package com.colegioquipux2.colegioquipux2.entidades;

import javax.persistence.*;

@Entity
@Table(name = "grupos")
public class Grupo {
    @Id
    private int codigo;
    private int grado;
    private int profesor;
    private String jornada;

    public int getCodigo() {
        return codigo;
    }

    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }

    public int getGrado() {
        return grado;
    }

    public void setGrado(int grado) {
        this.grado = grado;
    }

    public int getProfesor() {
        return profesor;
    }

    public void setProfesor(int profesor) {
        this.profesor = profesor;
    }

    public String getJornada() {
        return jornada;
    }

    public void setJornada(String jornada) {
        this.jornada = jornada;
    }
}

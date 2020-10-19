package com.colegioquipux2.colegioquipux2.entidades;

import javax.persistence.*;

@Entity
@Table(name = "estudiantes")
public class Estudiante {
    
    @Id
    //@Column
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int codigo;
    //@Column
    private String nombre;
    //@Column
    private String tipodocumento;
    //@Column
    private int numdocumento;
    //@Column
    private String ciudad;
    //@Column
    private String genero;
    //@Column
    private String direccion;
    //@Column
    private String telefono;
    //@Column
    private String celular;
    //@Column
    private String correo;

    public int getCodigo() {
        return codigo;
    }

    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getTipodocumento() {
        return tipodocumento;
    }

    public void setTipodocumento(String tipodocumento) {
        this.tipodocumento = tipodocumento;
    }

    public int getNumdocumento() {
        return numdocumento;
    }

    public void setNumdocumento(int numdocumento) {
        this.numdocumento = numdocumento;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getCelular() {
        return celular;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }
    
}

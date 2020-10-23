export class Estudiante{
    codigo: number;
    nombre: String;
    tipodocumento: String;
    numdocumento: number;
    ciudad: String;
    genero: String;
    direccion: String;
    telefono: number;
    celular: number;
    correo: String;

    constructor(codigo:number, nombre:String, tipodocumento:String, numdocumento:number, ciudad:String, genero:String, direccion:String, telefono:number, celular: number, correo:String){
        this.codigo = codigo;
        this.nombre = nombre;
        this.tipodocumento = tipodocumento;
        this.numdocumento = numdocumento;
        this.ciudad = ciudad;
        this.genero = genero;
        this.direccion = direccion;
        this.telefono = telefono;
        this.celular = celular;
        this.correo = correo;
    }
}


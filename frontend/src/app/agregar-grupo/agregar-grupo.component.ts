import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudiante } from '../model/Estudiante';
import { Grupo } from '../model/Grupo';
import { Materias } from '../model/Materias';
import { RelacionEstudiantesGrupo } from '../model/RelacionEstudiantesGrupo';
import { PostGrupo } from '../model/postGrupo';
import { RelacionMaetriasGrupo } from '../model/RelacionMateriasGrupo';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-agregar-grupo',
  templateUrl: './agregar-grupo.component.html',
  styleUrls: ['./agregar-grupo.component.css']
})
export class AgregarGrupoComponent implements OnInit {

  constructor(private router: Router, private service: ServiceService) { }

  grado: number = 0;
  profesor: number;
  jornada: string;
  estudiantes: number[] = [];
  materias: String[] = [];

  //estudiantes
  codigoEstudiante : number;
  estudiantesConGrupo: RelacionEstudiantesGrupo[];
  verificandoExistenciaEstudiante:Estudiante[];
  estudiantesSeleccionados: Estudiante[] = [];
  estudianteSeleccionadasExist : number = 0;
  estudiantesPost : RelacionEstudiantesGrupo[] = [];

  //materias
  materiasDisponibles: Materias[];
  materiasSeleccionadas: Materias[] = [];
  materiasSeleccionadasExist : number = 0;
  materiasPost : RelacionMaetriasGrupo[] = [];

  ngOnInit(): void {
    this.service.getMaterias().subscribe(data => {
      this.materiasDisponibles = data;
    })
    this.verificandoExisteArray();
    this.consultandoEstudiantesConGrupo();
    this.consultandoEstudiantes();
    this.verificandoSiHaySeleccionados();
  }

  NavegarHaciaInicio() {
    this.router.navigate(['/']);
  }

  onCreate() {
    this.materias
    this.materiasSeleccionadas.forEach(materia => {
      this.materias.push(materia.codigo)
    })
    this.estudiantesSeleccionados.forEach(estudiante => {
      this.estudiantes.push(estudiante.codigo);
    })
    this.subirGrupo()
  }

  /*******************POST*******************/
  subirGrupo(){
    var grupo = new Grupo(this.grado, this.profesor, this.jornada); //creamos grupo a subir
    this.service.postGrupo(grupo).subscribe(data => { //subimos grupo a la BBDD
      this.service.getGrupos().subscribe(data => { //obtenemos los grupos
        var gruposTemp = data; //variable que contiene el array con todos los grupos
        //console.log(gruposTemp)
        var sizeGrupos = gruposTemp.length -1   //escoge el indice del último elemento del array
        var grupoTemp : Grupo = gruposTemp[sizeGrupos] //escoge el último elemento del array
        const codigoGrupo = grupoTemp.codigo
        //console.log(grupoTemp) 
        //consultar ultimo id materia
        //enviar relacion materias
        this.service.getRelacionesMaterias().subscribe(data => {
          var relacionesMaterias : RelacionMaetriasGrupo[] = data; //asignamos lista de todas las relaciones
          var indiceUltimaRelacion = relacionesMaterias.length - 1;
          var ultimaRelacion = relacionesMaterias[indiceUltimaRelacion];
          let codigoMateria = ultimaRelacion.codigo + 1;
          //enviar relaciones
          this.materias.forEach(materia => { //por cada materia
            var relacion = new RelacionMaetriasGrupo(codigoMateria, materia, codigoGrupo)//creamos una relacion
            this.service.postRelacionMateria(relacion).subscribe(data => {

            },
            err => {
              alert("no se pudo subir la relacion materias")
            })//enviamos a la BBDD
            codigoMateria = codigoMateria + 1;
          })
        })

        this.service.getRelacionesEstudiantes().subscribe(data => {
          var relacionesEstudiantes : RelacionEstudiantesGrupo[] = data;
          var indiceUltimaRelacion = relacionesEstudiantes.length - 1;
          var ultimaRelacion = relacionesEstudiantes[indiceUltimaRelacion];
          let codigoRelacionEstudiante = ultimaRelacion.codigo;
          //enviar relacion estudiantes
          this.estudiantes.forEach(codigoEstudianteSubir => { //por cada materia
            var relacion = new RelacionEstudiantesGrupo(codigoRelacionEstudiante, codigoEstudianteSubir, codigoGrupo)//creamos una relacion
            this.service.postRelacionEstudiante(relacion).subscribe(data => {
              this.NavegarHaciaInicio();
            },
            err => {
              console.log(console.log(relacion))
              alert("no se pudo subir la relacion estudiantes")
            })//enviamos a la BBDD*/
            codigoRelacionEstudiante++;
          })
        })
        
      },
      err=>{
        alert('hay un error')
      })
    },
    err => {
      alert('Hubo un error subiendo el grupo')
    });
    
  }

  //******************Estudiante******************//
  consultandoEstudiantesConGrupo(){
    this.service.getRelacionesEstudiantes().subscribe(data => {
      this.estudiantesConGrupo = data;
    },
    err => {
      alert("hubo un error consultado los estudiantes existentes")
    })
  }

  consultandoEstudiantes(){
    this.service.getEstudiantes().subscribe(data => {
      this.verificandoExistenciaEstudiante = data;
    },
    err => {
      alert('ERROR: No se pudo verificar estudiante')
    })
  }

  verificandoSiHaySeleccionados(){
    if(this.estudiantesSeleccionados.length === 0){
      this.estudianteSeleccionadasExist = 1;
    }else{
      this.estudianteSeleccionadasExist = 0;
    }
  }

  eliminarEstudiante(estudiante : Estudiante){
    //elimino materia en seleccionadas
    var indiceBorrar = this.estudiantesSeleccionados.indexOf(estudiante)
    this.estudiantesSeleccionados.splice(indiceBorrar, 1);
    this.verificandoSiHaySeleccionados();
  }

  verificandoEstudianteExiste(){
    var bExisteBBDD : boolean;
    var estudianteSubir : Estudiante = null;
    this.verificandoExistenciaEstudiante.forEach(estudiante => {
      if(estudiante.codigo === this.codigoEstudiante){
        bExisteBBDD = true;
        estudianteSubir = estudiante;
      }
    });
    var bExisteGrupo : boolean;
    if(bExisteBBDD){
      this.estudiantesConGrupo.forEach(estudiante => {
        if(estudiante.estudiantes === this.codigoEstudiante){
          bExisteGrupo = true;
        }
      });
      if(bExisteGrupo){
        alert(`El estudiante ${this.codigoEstudiante} ya tiene grupo`)
      }else{
        var bExisteSeleccionados : boolean;
        this.estudiantesSeleccionados.forEach( estudiante => {
          if(estudiante.codigo === estudianteSubir.codigo){
            bExisteSeleccionados = true;
          }
        });
        if(!bExisteSeleccionados){
          this.estudiantesSeleccionados.push(estudianteSubir);
          this.verificandoSiHaySeleccionados();
        }else{
          alert(`El estudiante ${this.codigoEstudiante} ya esta en tus seleccionados`)
        }
      }
    }else{
      alert(`El estudiante ${this.codigoEstudiante} no existe`)
    }
  }


  //******************materias******************//
  
  verificandoExisteArray(){
    if(this.materiasSeleccionadas.length === 0){
      this.materiasSeleccionadasExist = 1;
    }else{
      this.materiasSeleccionadasExist = 0;
    }
  }

  eliminarMateria( materia : Materias){
    //agregar la materia a disponibles
    this.materiasDisponibles.push(materia)
    //elimino materia en seleccionadas
    var indiceBorrar = this.materiasSeleccionadas.indexOf(materia)
    this.materiasSeleccionadas.splice(indiceBorrar, 1);
    this.verificandoExisteArray();
  }

  agregarMateria(materia: Materias) {
    //verificar si la grado esta definida 
    if (this.grado != 0) {
      //verificar si el grado coincide
      const sgrado = this.grado.toString(); //convierte el grado del formulario a string
      var grados = materia.grados; // selecciona los grados disponibles en la materia
      var resultado = grados.indexOf(sgrado); //verifica si el grado del formulario corresponde con el grado de la materia
      if (resultado != -1) {
        //eliminar de las opciones
        var i = 0;
        var indiceBorrar: number; //variable para ver el indice de la materia a borrar de las opciones
        this.materiasDisponibles.forEach(materiaGet => {
          if (materiaGet.nombre === materia.nombre) {
            indiceBorrar = i; //cuando el nombre de la materia disponible corresponda al nombre de la materia seleccionada se marcará el indice a borrar
          }
          i++; //aumentamos 1 en 1 por cada materia recorrida
        })
        this.materiasSeleccionadas.push(this.materiasDisponibles[indiceBorrar]) //agregamos la materia disponible a las seleccionadas
        this.verificandoExisteArray() //actualiza array de seleccionados
        this.materiasDisponibles.splice(indiceBorrar, 1); //borra de las materias disponibles
      } else{
        alert("ERROR: El grado seleccionado no corresponde para esta materia")
      }
    }else{
      alert("Seleccione un grado")
    }

  }

}

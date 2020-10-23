import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarEstudianteComponent } from './agregar-estudiante/agregar-estudiante.component';
import { AgregarGrupoComponent } from './agregar-grupo/agregar-grupo.component';
import { AgregarMateriaComponent } from './agregar-materia/agregar-materia.component';
import { BuscarEstudianteComponent } from './buscar-estudiante/buscar-estudiante.component';
import { BuscarGrupoComponent } from './buscar-grupo/buscar-grupo.component';
import { BuscarMateriaComponent } from './buscar-materia/buscar-materia.component';
import { EditarEstudianteComponent } from './editar-estudiante/editar-estudiante.component';
import { EditarGrupoComponent } from './editar-grupo/editar-grupo.component';
import { EditarMateriaComponent } from './editar-materia/editar-materia.component';
import { EliminarEstudianteComponent } from './eliminar-estudiante/eliminar-estudiante.component';
import { EliminarGrupoComponent } from './eliminar-grupo/eliminar-grupo.component';
import { EliminarMateriaComponent } from './eliminar-materia/eliminar-materia.component';
import { InicioComponent } from './inicio/inicio.component';
import { VerEstudiantesComponent } from './ver-estudiantes/ver-estudiantes.component';
import { VerGruposComponent } from './ver-grupos/ver-grupos.component';
import { VerMateriasComponent } from './ver-materias/ver-materias.component';
import { EstudianteErrorComponent } from './buscar-estudiante/error/estudiante-error/estudiante-error.component';
import { RelacionMateriasComponent } from './relacion-materias/relacion-materias/relacion-materias.component';
import { RelacionEstudiantesComponent } from './relacion-estudiantes/relacion-estudiantes/relacion-estudiantes.component';

const routes: Routes = [
  {path:'', component:InicioComponent},
  {path: 'verEstudiantes', component:VerEstudiantesComponent},
  {path: 'buscarEstudiante', component:BuscarEstudianteComponent},
  {path: 'agregarEstudiante', component:AgregarEstudianteComponent},
  {path: 'editarEstudiante', component:EditarEstudianteComponent},
  {path: 'eliminarEstudiante', component:EliminarEstudianteComponent}, //endEstudiante
  {path: 'buscarGrupo', component:BuscarGrupoComponent},
  {path: 'verGrupos', component:VerGruposComponent},
  {path: 'agregarGrupo', component:AgregarGrupoComponent},
  {path: 'editarGrupo', component:EditarGrupoComponent},
  {path: 'eliminarGrupo', component:EliminarGrupoComponent}, //endGrupo
  {path: 'verMaterias', component:VerMateriasComponent},
  {path: 'buscarMateria', component:BuscarMateriaComponent},
  {path: 'agregarMateria', component:AgregarMateriaComponent},
  {path: 'editarMateria', component:EditarMateriaComponent},
  {path: 'eliminarMateria', component:EliminarMateriaComponent},
  {path: 'buscarEstudiante-error', component:EstudianteErrorComponent},
  {path: 'buscarGrupo/materias-grupos/:id', component:RelacionMateriasComponent},
  {path: 'buscarGrupo/estudiantes-grupos/:id', component:RelacionEstudiantesComponent},
  {path: 'verGrupo/materias-grupos/:id', component:RelacionMateriasComponent},
  {path: 'verGrupo/estudiantes-grupos/:id', component:RelacionEstudiantesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

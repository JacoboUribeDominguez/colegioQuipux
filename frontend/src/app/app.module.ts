import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { VerEstudiantesComponent } from './ver-estudiantes/ver-estudiantes.component';
import { BuscarEstudianteComponent } from './buscar-estudiante/buscar-estudiante.component';
import { EditarEstudianteComponent } from './editar-estudiante/editar-estudiante.component';
import { EliminarEstudianteComponent } from './eliminar-estudiante/eliminar-estudiante.component';
import { VerGruposComponent } from './ver-grupos/ver-grupos.component';
import { BuscarGrupoComponent } from './buscar-grupo/buscar-grupo.component';
import { AgregarGrupoComponent } from './agregar-grupo/agregar-grupo.component';
import { EditarGrupoComponent } from './editar-grupo/editar-grupo.component';
import { EliminarGrupoComponent } from './eliminar-grupo/eliminar-grupo.component';
import { VerMateriasComponent } from './ver-materias/ver-materias.component';
import { BuscarMateriaComponent } from './buscar-materia/buscar-materia.component';
import { AgregarMateriaComponent } from './agregar-materia/agregar-materia.component';
import { EditarMateriaComponent } from './editar-materia/editar-materia.component';
import { EliminarMateriaComponent } from './eliminar-materia/eliminar-materia.component';
import { AgregarEstudianteComponent } from './agregar-estudiante/agregar-estudiante.component';
import { FormsModule } from '@angular/forms'
import { ServiceService } from './service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { EstudiantesGruposComponent } from './buscar-grupo/botones/estudiantes-grupos/estudiantes-grupos.component';
import { MateriasGruposComponent } from './buscar-grupo/botones/materias-grupos/materias-grupos.component';
import { EstudianteErrorComponent } from './buscar-estudiante/error/estudiante-error/estudiante-error.component';
import { RelacionMateriasComponent } from './relacion-materias/relacion-materias/relacion-materias.component';
import { RelacionEstudiantesComponent } from './relacion-estudiantes/relacion-estudiantes/relacion-estudiantes.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    VerEstudiantesComponent,
    BuscarEstudianteComponent,
    EditarEstudianteComponent,
    EliminarEstudianteComponent,
    VerGruposComponent,
    BuscarGrupoComponent,
    AgregarGrupoComponent,
    EditarGrupoComponent,
    EliminarGrupoComponent,
    VerMateriasComponent,
    BuscarMateriaComponent,
    AgregarMateriaComponent,
    EditarMateriaComponent,
    EliminarMateriaComponent,
    AgregarEstudianteComponent,
    EstudiantesGruposComponent,
    MateriasGruposComponent,
    EstudianteErrorComponent,
    RelacionMateriasComponent,
    RelacionEstudiantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

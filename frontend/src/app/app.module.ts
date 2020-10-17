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
    AgregarEstudianteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

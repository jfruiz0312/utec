import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TraductorsComponent } from './pages/traductors/traductors.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { TraductorComponent } from './pages/traductor/traductor.component';

const routes:Routes=[
  {path:'traductores', component:TraductorsComponent},
  {path:'listado', component:ListadoComponent},
  {path:'traductor/:id', component:TraductorComponent},
  {path:'buscar/:texto', component:TraductorsComponent},
  

  {path:'', pathMatch:'full', redirectTo:'/traductores'},
  {path:'**', pathMatch:'full', redirectTo:'/traductores'},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

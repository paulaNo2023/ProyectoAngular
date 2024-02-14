import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cursos } from './model/index';
import { CursosModule } from './cursos.module';
import { CursosComponent } from './cursos.component';




const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: CursosComponent
    
      },

    ]),
  ],
  exports: [RouterModule]
})
export class CursosRoutingModule { }

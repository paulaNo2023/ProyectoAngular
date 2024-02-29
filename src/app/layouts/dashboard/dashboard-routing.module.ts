import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard.module';
import { DashboardComponent } from './dashboard.component';
import { CursosModule } from './pages/cursos/cursos.module';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      children: [
        {
          path: 'users',
          loadChildren:() => 
          import('./pages/users/estudiante.module').then((m)=> m.UsersModule),
        },
        {
          path: 'home', 
          loadChildren:() => 
          import('./pages/home/home.module').then((m)=> m.HomeModule), 
        },
        {
          path: 'cursos',
          loadChildren:()=>
          import('./pages/cursos/cursos.module').then((m)=> m.CursosModule)

        },
         {
          path: '',
          redirectTo: 'login',
          pathMatch: 'full'
        },

      ]
    },
  ])],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

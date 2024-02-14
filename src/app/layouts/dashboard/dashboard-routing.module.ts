import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '/dashboard',
      component: DashboardComponent,
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
        /*{
          path: 'login', 
          loadChildren:() => 
          import('').then((m)=> m.AuthModule),
        },
        {
          path: 'cursos',
          loadChildren:() => 
          import('./layouts/dashboard/pages/cursos/cursos.module').then((m)=> m.CursosModule), 
        
        },*/
        {
          path: '**',
          redirectTo: '/404'
        },

      ]
    },
  ])],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { LoginComponent } from './layouts/auth/login.component';
import { UsersComponent } from './layouts/dashboard/pages/users/estudiante.component';
import { HomeComponent } from './layouts/dashboard/pages/home/home.component';
import { NotFoundComponent } from './layouts/404/not-found.component';
import { CursosComponent } from './layouts/dashboard/pages/cursos/cursos.component';


const routes: Routes = [{
  path: 'dashboard', component: DashboardComponent,
  children: [
    {
      path: 'users',
      loadChildren:() => 
      import('./layouts/dashboard/pages/users/estudiante.module').then((m)=> m.UsersModule),
    },
    {
      path: 'home', 
      loadChildren:() => 
      import('./layouts/dashboard/pages/home/home.module').then((m)=> m.HomeModule), 
    },
    {
      path: 'login', 
      loadChildren:() => 
      import('./layouts/auth/auth.module').then((m)=> m.AuthModule),
    },
    {
      path: 'cursos',
      loadChildren:() => 
      import('./layouts/dashboard/pages/cursos/cursos.module').then((m)=> m.CursosModule), 
    
    },
    {
      path: '**',
      redirectTo: '/404'
    },

    
  ]
},
{
  path: 'login', component: LoginComponent,
},
{
  path: '404', component: NotFoundComponent,

},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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
      path: 'users', component : UsersComponent,
    },
    {
      path: 'home', component : HomeComponent,
    },
    {
      path: 'login', component : LoginComponent,
    },
    {
      path: 'cursos', component: CursosComponent,
    
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

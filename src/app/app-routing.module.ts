import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { LoginComponent } from './layouts/auth/login.component';
import { UsersComponent } from './layouts/dashboard/pages/users/estudiante.component';
import { HomeComponent } from './layouts/dashboard/pages/home/home.component';
import { NotFoundComponent } from './layouts/404/not-found.component';
//import { CursosComponent } from './layouts/dashboard/pages/cursos/cursos.component';
import { AuthModule } from './layouts/auth/auth.module';


const routes: Routes = [
{
path: 'login',
loadChildren:()=>
import ('./layouts/auth/auth.module').then((m)=> m.AuthModule),
},
{
  path: 'dashboard',component: DashboardComponent,
  loadChildren:()=>
  import ('./layouts/dashboard/dashboard.module').then((m)=> m.DashboardModule),
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
    },
    {
      path:'404', component: NotFoundComponent,
    },
    {
      path: '**',
      redirectTo:'404'
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

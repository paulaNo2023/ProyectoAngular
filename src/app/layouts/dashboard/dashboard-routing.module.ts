import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard.module';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '/dashboard',
      component: DashboardComponent
    },
  ])],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

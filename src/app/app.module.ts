import { Component, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './layouts/dashboard/dashboard.module';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import esAR from '@angular/common/locales/es-AR';
import { HomeComponent } from './layouts/dashboard/pages/home/home.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { LoginComponent } from './layouts/auth/login.component';
import { NotFoundComponent } from './layouts/404/not-found.component';
//import { CursosComponent } from './layouts/dashboard/pages/cursos/cursos.component';
import { Routes } from '@angular/router';
import { Estudiante } from './layouts/dashboard/pages/users/models/index';
import { UserFormComponent } from './layouts/dashboard/pages/users/components/user-form/estudiante-form.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';






registerLocaleData(es);
registerLocaleData(esAR);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  
    
   

  ],
  providers: [

    {
      provide: LOCALE_ID,
      useValue: 'es-AR',
      
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue:{
      appearance: 'outline',
        
      },
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

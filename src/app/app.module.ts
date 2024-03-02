import { Component, LOCALE_ID, NgModule, isDevMode } from '@angular/core';
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
import { Users } from './layouts/dashboard/pages/users/models/index';
import { UserFormComponent } from './layouts/dashboard/pages/users/components/user-form/estudiante-form.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './layouts/auth/auth.module';
import { MY_USER_TOKEN } from './core/injection-tokens';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './store/app.reducer';






@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AuthModule,
    StoreModule.forRoot(appReducer, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  
    
   

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
    },
    {    provide: MY_USER_TOKEN,
      useValue: 'ldsjdm348342kjewkjksfdmsakjdsad',
    },
    {
      provide: 'API_URL',
      useValue: 'http://localhost:4200/',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

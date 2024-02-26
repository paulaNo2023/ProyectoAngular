import { Inject, Injectable } from '@angular/core';
import { Estudiante } from '../../layouts/dashboard/pages/users/models';
import { DataSource } from '@angular/cdk/collections';
import { debounce, delay, of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const USER_DB: Estudiante[] = [];

@Injectable({providedIn: 'root'})
export class UsersService {
  constructor( private httClient: HttpClient ) { 
  }

  getUsers() {
   // return of(USER_DB).pipe(delay(2000))
   return this.httClient.get<Estudiante[]>('http://localhost:3000/Estudiante')
  }

}

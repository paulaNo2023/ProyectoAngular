import { Inject, Injectable } from '@angular/core';
import { Users } from '../../layouts/dashboard/pages/users/models';
import { DataSource } from '@angular/cdk/collections';
import { debounce, delay, of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const USER_DB: Users[] = [];

@Injectable({providedIn: 'root'})
export class UsersService {
  constructor( private httClient: HttpClient ) { 
  }

  getUsers() {
   // return of(USER_DB).pipe(delay(2000))
   return this.httClient.get<Users[]>('http://localhost:3000/Estudiante')
  }

}

import { Inject, Injectable } from '@angular/core';
import { Cursos } from '../../layouts/dashboard/pages/cursos/model';
import { DataSource } from '@angular/cdk/collections';
import { debounce, delay, of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const USER_DB: Cursos[] = [
];

@Injectable({providedIn: 'root'})
export class UsersService {
  constructor( private httClient: HttpClient ) { 
  }

  getUsers(): Observable<any[]> {
    return of(USER_DB).pipe(delay(2000))
  }

}

import { Inject, Injectable } from '@angular/core';
import { Estudiante } from '../../layouts/dashboard/pages/users/models';
import { DataSource } from '@angular/cdk/collections';
import { debounce, delay, of, Observable } from 'rxjs';

const USER_DB: Estudiante[] = [{
  id: 1,
  firstName: 'Maria Paula',
  lastName: 'Sanabria',
  email: 'paulasanabria@hotmai.com',
  curso: 'backend',
  profesor:'carlos',
  password: '123456',
  role: 'ESTUDIANTE',
  editar: '',
  eliminar: '',
},
{
  id: 2,
  firstName: 'Carlos',
  lastName: 'Perez',
  email: 'carlos23@hotmail.com',
  curso: 'Amgular',
  profesor:'Cristian',
  password: '123456',
  role: 'ADMIN',
  editar: '',
  eliminar: '',
},
{
  id: 3,
  firstName: 'Camila',
  lastName: 'Naranjo',
  email: 'cami@hotmail.com',
  curso: 'Frontend',
  profesor:'Josue',
  password: '123456',
  role: 'ESTUDIANTE',
  editar: '',
  eliminar: '',
},
{
  id: 4,
  firstName: 'Noah',
  lastName: 'Sanchez',
  email: 'Nsanzhez@hotmail.com',
  curso: 'Amgular',
  profesor:'Cristian',
  password: '123456',
  role: 'ESTUDIANTE',
  editar: '',
  eliminar: '',
},
{
  id: 5,
  firstName: 'Ricardo',
  lastName: 'Daza',
  email: 'Richard@hotmail.com',
  curso: 'Backend',
  profesor:'Josue',
  password: '123456',
  role: 'ESTUDIANTE',
  editar: '',
  eliminar: '',
},
];

@Injectable({providedIn: 'root'})
export class UsersService {
  constructor() { 
  }

  getUsers(): Observable<any[]> {
    return of(USER_DB).pipe(delay(2000))
  }

}

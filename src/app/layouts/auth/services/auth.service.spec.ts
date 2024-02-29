import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { Users } from '../../dashboard/pages/users/models';

describe('Pruebas de AuthService', () => {
  let authService: AuthService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
      imports: [HttpClientTestingModule],
    });

    authService = TestBed.inject(AuthService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('AuthService debe estar definido', () => {
    expect(authService).toBeTruthy();
  });

  it('Al llamar login() debe establecer un authUser', () => {
    const MOCK_RESPONSE: Users[] = [
      {
        id: 1,
        firstName: "paula",
        lastName: "sanabria",
        email: "paula@gmail.com",
        curso: "backend",
        profesor: "Josue",
        password: "123456",
        role: "admin",
        editar : '',
        eliminar: '',
        token: 'ksdjakdasdsad',
      },
    ];

  
    authService
      .login({ email: 'mock@mail.com', password: 'password' })
      .subscribe({
        next: () => {
          expect(authService.authUser).toEqual(MOCK_RESPONSE[0]);
        },
      });

    httpController
      .expectOne({
        url: 'http://localhost:3000/users?email=paula@gmail.com&password=123456',
        method: 'GET',
      })
      .flush(MOCK_RESPONSE);
  });
});
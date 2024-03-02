import { Injectable } from '@angular/core';
import { Users } from '../../dashboard/pages/users/models';
import { Router } from '@angular/router';
import { Observable, delay, finalize, map, of, tap } from 'rxjs';
import { AlertsService } from '../../../core/services/alerts.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environment/environment';
import { LoadingServiceService } from '../../../core/services/loading-service';


interface LoginData {
  email: null | string;
  password: null | string;
}

const MOCK_USER = {
  id: 48,
  email: 'test@mail.com',
  firstName: 'FAKENAME',
  lastName: 'FAKELASTNAME',
  password: '123456',
  role: 'ADMIN',
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  authUser: Users | null = null;
  private usuarioLoggeado: boolean;

  constructor(
    private alertsService: AlertsService,
    private router: Router,
    private loadingService: LoadingServiceService,
    
    private httpClient: HttpClient
  ) {
    let estaLoggeado = Boolean(sessionStorage.getItem('usuarioVerificado'));
    this.usuarioLoggeado = estaLoggeado;
  }
 

  private setAuthUser(user: Users): void {
    this.authUser = user;
    localStorage.setItem('token', user.token);
  }
  desloggear() {
    sessionStorage.clear();
    this.usuarioLoggeado = false;
  }

  estaLoggeado(): Promise<boolean> {
    return Promise.resolve(this.usuarioLoggeado);
  }

  login(data: LoginData): Observable<Users[]> {
    return this.httpClient
      .get<Users[]>(
        `${environment.apiURL}/users?email=${data.email}&password=${data.password}`
      )
      .pipe(
        tap((response) => {
          if (!!response[0]) {
            this.setAuthUser(response[0]);
            this.router.navigate(['dashboard', 'home']);
          } else {
            this.alertsService.showError('Email o password invalidos');
          }
        })
      );
  }

  logout(): void {
    this.authUser = null;
    this.router.navigate(['auth', 'login']);
    localStorage.removeItem('token');
    
  }

  verifyToken() {
    return this.httpClient
      .get<Users[]>(
        `${environment.apiURL}/users?token=${localStorage.getItem('token')}`
      )
      .pipe(
        map((response) => {
          if (response.length) {
            this.setAuthUser(response[0]);
            return true;
          } else {
            this.authUser = null;
            localStorage.removeItem('token');
            return false;
          }
        })
      );
  }
}
import { Injectable } from '@angular/core';
import { Users } from '../../dashboard/pages/users/models';
import { Router } from '@angular/router';
import { Observable, delay, finalize, map, of, tap } from 'rxjs';
import { AlertsService } from '../../../core/services/alerts.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environment/environment';
import { LoadingServiceService } from '../../../core/services/loading-service';
import { AuthActions } from '../../../store/auth/actions';
import { Store } from '@ngrx/store';


interface LoginData {
  email: null | string;
  password: null | string;
}

const MOCK_USER = {
  id: 26,
  email: 'pau@gma.com',
  firstName: 'PAULA',
  lastName: 'SANABRIA',
  password: '123456',
  role: 'ADMIN',
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  [x: string]: any;
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
    this['store'].dispatch(AuthActions.setAuthUser({ user }));
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
    this['store'].dispatch(AuthActions.logout());
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
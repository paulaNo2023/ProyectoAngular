import { Inject, Injectable } from '@angular/core';
import { MY_USER_TOKEN } from '../../../../core/injection-tokens';
import { Observable, catchError, delay, mergeMap, of, tap } from 'rxjs';
import { AlertsService } from '../../../../core/services/alerts.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from './models';
import { environment } from '../../../../../environment/environment';
import { Pagination } from '../../../../core/models/pagination';

const ROLES_DB: string[] = ['ADMIN', 'USER'];

let USERS_DB: Users[] = [];

@Injectable()
export class UsersService {
  constructor(private alerts: AlertsService, private httpClient: HttpClient) {}

  generateString(length: number) {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  getUserById(id: number | string): Observable<Users | undefined> {
    return this.httpClient.get<Users>(`${environment.apiURL}/users/${id}`);
  }

  getRoles(): Observable<string[]> {
    return of(ROLES_DB).pipe(delay(1000));
  }

  getUsers() {
    return this.httpClient
      .get<Users[]>(`${environment.apiURL}/users`, {
      })
      .pipe(
        catchError((error) => {
          this.alerts.showError('ERROR');
          return of([]);
        })
      );
  }

  paginate(page: number, perPage = 5) {
    return this.httpClient.get<Pagination<Users>>(
      `${environment.apiURL}/users?_page=${page}&_per_page=${perPage}`
    );
  }

  createUser(payload: Users) {
    return this.httpClient
      .post<Users>(`${environment.apiURL}/users`, {
        ...payload,
        token: this.generateString(15),
      })
      .pipe(mergeMap(() => this.getUsers()));
  }

  deleteUser(userID: number) {
    return this.httpClient
      .delete<Users>(`${environment.apiURL}/users/${userID}`)
      .pipe(mergeMap(() => this.getUsers()));
  }

  getAllBuyers(): Observable<Users[]> {
    return this.httpClient.get<Users[]>(
      `${environment.apiURL}/users?role=BUYER`
    );
  }
}
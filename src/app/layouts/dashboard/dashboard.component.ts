import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { Store } from '@ngrx/store';
import { selectAuthUser } from '../../store/auth/selectors';
import { Observable } from 'rxjs';
import { Users } from './pages/users/models';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  showFiller = false;
  authUser$: Observable<Users | null> | undefined;
  constructor(private authService: AuthService, private store:Store){
    this.authUser$ = this.store.select(selectAuthUser);
  }

  logout(): void{
   this.authService.logout();
  }
}

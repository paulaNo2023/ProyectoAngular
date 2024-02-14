import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  showFiller = false;
  constructor(private authService: AuthService){

  }

  logout(): void{
   // this.router.navigate(['users'], {relativeTo: this.route})
   //localStorage.removeItem('access-token'); 
   this.authService.logout();
  }
}

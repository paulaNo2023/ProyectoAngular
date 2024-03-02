import { Component, OnInit, ViewChild } from '@angular/core';
import { Users } from './models';
import { MatTable } from '@angular/material/table';
import { UsersService } from './estudiante.service'
import { LoadingServiceService } from '../../../../core/services/loading-service';
import { delay, forkJoin, of } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-users',
  templateUrl: './estudiante.component.html',
  styleUrl: './estudiante.component.scss',
  providers : [UsersService]
})
export class UsersComponent implements OnInit {
  [x: string]: any;
  displayedColumns: string[] = ['id', 'fullName', 'email', 'curso','profesor', 'role', 'editar', 'eliminar' ];
  roles: string[] = [];
  dataSource: Users[]= [];
  totalItems = 0;
  pageSize = 5;
  currentPage = 1;
  body: any = {};
  estudianteForm!: FormGroup;
  estudianteString: any;
  estudiante: any;

  constructor(private usersService: UsersService, 
    private loadingService: LoadingServiceService,
    private route: ActivatedRoute
    ){}
  ngOnInit(): void {
    this.getPageData();
  }
  
  getPageData(): void {
    this.loadingService.setIsLoading(true);
    forkJoin([
      this.usersService.getRoles(),
      this.usersService.paginate(this.currentPage),
    ]).subscribe({
      next: (value) => {
        this.roles = value[0];

        const paginationResult = value[1];
        this.totalItems = paginationResult.items;
        this.dataSource = paginationResult.data;

      },
      complete: () => {
        this.loadingService.setIsLoading(false);
      },
    });
  }

  onPage(ev: PageEvent) {
    this.currentPage = ev.pageIndex + 1;
    this.usersService.paginate(this.currentPage, ev.pageSize).subscribe({
      next: (paginateResult) => {
        this.totalItems = paginateResult.items;
        this.dataSource = paginateResult.data;
        this.pageSize = ev.pageSize;
      },
    });
  }
    onUserSubmitted(ev: Users): void {
      this.loadingService.setIsLoading(true);
      this.usersService.createUser(ev).subscribe({
        next: (User: any) => {
          this.dataSource = [...User];
        },
        complete: () => {
          this.loadingService.setIsLoading(false);
        },
      });
    }
  
  
  botonEditar(){   
    this.body['id'] = String(this.estudiante.id);
    for (let nombreControl in this.estudianteForm.controls){
      let control = this.estudianteForm.get(nombreControl);
      if(control?.dirty){
        this.body[nombreControl] = nombreControl === 'nombre' || nombreControl === 'apellido' ? (this.estudianteForm.get(nombreControl)?.value).trim().toUpperCase() : this.estudianteForm.get(nombreControl)?.value;
     }else {
      this.body[nombreControl] = this.estudiante[nombreControl];
    }


  
  
    }}
  
   
  @ViewChild(MatTable) Tabla1!: MatTable<Users>;
  botonEliminar(ev:Users){  
    this.loadingService.setIsLoading(true);
    this.usersService.deleteUser(ev.id).subscribe({
      next: (users) => {
        this.dataSource = [...users];
      },
      complete: () => {
        this.loadingService.setIsLoading(false);
      },
    });
    }


  }


 

  ;
  
  



import { Component, OnInit, ViewChild } from '@angular/core';
import { Estudiante } from './models';
import { MatTable } from '@angular/material/table';
import { UsersService } from '../../../../core/services/users.service';
import { LoadingServiceService } from '../../../../core/services/loading-service';
import { delay, of } from 'rxjs';
@Component({
  selector: 'app-users',
  templateUrl: './estudiante.component.html',
  styleUrl: './estudiante.component.scss',
  providers : [UsersService]
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'fullName', 'email', 'curso','profesor', 'role', 'editar', 'eliminar' ];
  
  dataSource: Estudiante[]= [];

  constructor(private usersService: UsersService, private loadingService: LoadingServiceService){}


  onUserSubmitted(ev: Estudiante): void {
    // this.dataSource.push(ev);
    this.dataSource = [...this.dataSource, { ...ev, id: new Date().getTime() }];

  }
  
  botonEditar(id:number){   

  
  
  }
  
   
  @ViewChild(MatTable) Tabla1!: MatTable<Estudiante>;
  botonEliminar(id:number){  
    if(confirm("Quiere borrar este registro?")){
      this.dataSource.splice(id,1);
      this.Tabla1.renderRows();
    }


  }


  ngOnInit(): void {
    this.loadingService.setIsLoading(true);
    this.usersService.getUsers().subscribe({
      next: (users) => {
        this.dataSource = users;
      },
      complete : ()=>{
        this.loadingService.setIsLoading(false);
      }
    })}

  };
  
  



/*import { Component, OnInit, ViewChild } from '@angular/core';
import { Cursos } from './model';
import { MatTable } from '@angular/material/table';
import { UsersService } from '../../../../core/services/users.service';
import { LoadingServiceService } from '../../../../core/services/loading-service';
import { delay, of } from 'rxjs';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss',
})
export class CursosComponent {
  displayedColumns: string[] = ['id', 'fullName', 'email', 'curso','profesor', 'role', 'editar', 'eliminar' ];
  
  dataSource: Cursos[]= [];

  constructor(){}


  onCursosSubmitted(ev: Cursos): void {
    // this.dataSource.push(ev);
    this.dataSource = [...this.dataSource, { ...ev, id: new Date().getTime() }];

  }
  
  botonEditar(id:number){   

  
  
  }
  
   
  @ViewChild(MatTable) Tabla2!: MatTable<Cursos>;
  botonEliminar(id:number){  
    if(confirm("Quiere borrar este registro?")){
      this.dataSource.splice(id,1);
      this.Tabla2.renderRows();
    }


  }




  };
  
  
*/



import { Component, OnInit, ViewChild } from '@angular/core';
import { Cursos } from './model';
import { MatTable } from '@angular/material/table';
import { UsersService } from '../../../../core/services/users.service';
import { LoadingServiceService } from '../../../../core/services/loading-service';
import { delay, of } from 'rxjs';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss',
})
export class CursosComponent {
  displayedColumns: string[] = ['id', 'curso', 'profesor', 'semestre','creditos', 'email', 'editar', 'eliminar' ];
  
  dataSource: Cursos[]= [];
  body: any = {};
  estudianteForm!: FormGroup;
  estudianteString: any;
  estudiante: any;

  constructor(){}


  onCursosSubmitted(ev: Cursos): void {
    // this.dataSource.push(ev);
    this.dataSource = [...this.dataSource, { ...ev, id: new Date().getTime() }];

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
  
   
  @ViewChild(MatTable) Tabla2!: MatTable<Cursos>;
  botonEliminar(id:number){  
    if(confirm("Quiere borrar este registro?")){
      this.dataSource.splice(id,1);
      this.Tabla2.renderRows();
    }


  }




  };
  
  




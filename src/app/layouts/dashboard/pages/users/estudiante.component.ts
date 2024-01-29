import { Component, ViewChild } from '@angular/core';
import { Estudiante } from './models';
import { MatTable } from '@angular/material/table';
@Component({
  selector: 'app-users',
  templateUrl: './estudiante.component.html',
  styleUrl: './estudiante.component.scss',
})
export class UsersComponent {
  displayedColumns: string[] = ['id', 'fullName', 'email', 'curso','profesor', 'role', 'editar', 'eliminar' ];
  
  dataSource: Estudiante[] = [
    {
      id: 1,
      firstName: 'Maria Paula',
      lastName: 'Sanabria',
      email: 'paulasanabria@hotmai.com',
      curso: 'backend',
      profesor:'carlos',
      password: '123456',
      role: 'ESTUDIANTE',
      editar: '',
      eliminar: '',
    },
    {
      id: 2,
      firstName: 'Carlos',
      lastName: 'Perez',
      email: 'carlos23@hotmail.com',
      curso: 'Amgular',
      profesor:'Cristian',
      password: '123456',
      role: 'ADMIN',
      editar: '',
      eliminar: '',
    },
    {
      id: 3,
      firstName: 'Camila',
      lastName: 'Naranjo',
      email: 'cami@hotmail.com',
      curso: 'Frontend',
      profesor:'Josue',
      password: '123456',
      role: 'ESTUDIANTE',
      editar: '',
      eliminar: '',
    },
    {
      id: 4,
      firstName: 'Noah',
      lastName: 'Sanchez',
      email: 'Nsanzhez@hotmail.com',
      curso: 'Amgular',
      profesor:'Cristian',
      password: '123456',
      role: 'ESTUDIANTE',
      editar: '',
      eliminar: '',
    },
    {
      id: 5,
      firstName: 'Ricardo',
      lastName: 'Daza',
      email: 'Richard@hotmail.com',
      curso: 'Backend',
      profesor:'Josue',
      password: '123456',
      role: 'ESTUDIANTE',
      editar: '',
      eliminar: '',
    },


  ];

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



}

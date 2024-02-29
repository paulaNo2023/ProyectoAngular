import { TestBed } from '@angular/core/testing';
import { UsersComponent } from './estudiante.component';
import { MockProvider } from 'ng-mocks';
import { UsersService } from './estudiante.service';
import { of } from 'rxjs';

describe('Pruebas de UsersComponent', () =>
{
    let component: UsersComponent;
     beforeEach(() => {
         TestBed.configureTestingModule({
             declarations: [UsersComponent],
             providers: [
                 MockProvider(UsersService, {
                     getUsers: () => of([
                         {
                             "id": 4,
                             "firstName": "Noah",
                             "lastName": "Sanchez",
                             "email": "Nsanzhez@hotmail.com",
                             "curso": "Amgular",
                             "profesor": "Cristian",
                             "password": "123456",
                             "role": "ESTUDIANTE",
                             "editar": "",
                             "eliminar": "",
                             "token": "abc3"
                         },
                         {
                             "id": 5,
                             "firstName": "Ricardo",
                             "lastName": "Daza",
                             "email": "Richard@hotmail.com",
                             "curso": "Backend",
                             "profesor": "Josue",
                             "password": "123456",
                             "role": "ESTUDIANTE",
                             "editar": "",
                             "eliminar": "",
                             "token": "abc4"
                         }
                     ])
                 })
             ],
         });
        component= TestBed.createComponent(UsersComponent).componentInstance;


     })
     it('Las columnas deben ser (displayedColumns): "id", "fullName", "email", "curso","profesor", "role", "editar", "eliminar", "token"',() =>{
        expect (component.displayedColumns).toContain('id');
        expect (component.displayedColumns).toContain('fullName');
        expect (component.displayedColumns).toContain('email');
        expect (component.displayedColumns).toContain('curso');
        expect (component.displayedColumns).toContain('profesor');
        expect (component.displayedColumns).toContain('role');
        expect (component.displayedColumns).toContain('editar');
        expect (component.displayedColumns).toContain('eliminar');
        expect (component.displayedColumns).toContain('token');

     }
     );
})
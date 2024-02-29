import { MY_USER_TOKEN } from '../../../../../core/injection-tokens/index';
export interface Cursos {
    id: number;
    curso: string;
    profesor: string;
    semestre: string;
    creditos: string;
    email: string;
    editar : '';
    eliminar: '';
    token: string;
  }
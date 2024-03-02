import { Action, State, createReducer, on } from "@ngrx/store";
import { guardarEstudiante } from "./users.action";
import { Users } from "../../layouts/dashboard/pages/users/models";

const initialState: Users = {
 
  id: 0,
  firstName: '',
  lastName: '',
  email: '',
  curso: '',
  profesor: '',
  password: '',
  role: '',
  editar : '',
  eliminar: '',
  token: ''
};

export const usersReducer = createReducer(
    initialState,
    on(guardarEstudiante, (state, {updatedValue}) => updatedValue ),
);
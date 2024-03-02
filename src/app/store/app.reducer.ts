import { ActionReducerMap } from "@ngrx/store";
import { usersReducer } from "./users/users.reducer";
import { Users } from '../layouts/dashboard/pages/users/models/index';


export const appReducer: ActionReducerMap<{UsersState : any}> = {
    UsersState: usersReducer
}
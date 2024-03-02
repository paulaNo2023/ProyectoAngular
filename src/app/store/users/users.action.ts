import { createAction, props } from "@ngrx/store";
import { Users } from "../../layouts/dashboard/pages/users/models";

export const guardarEstudiante = createAction('[Users] Guardar estudiante', props<{ updatedValue :Users}>());
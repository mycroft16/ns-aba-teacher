import { createAction, props, union } from '@ngrx/store';
import { IStudent } from '../../interfaces/students.interface';

export const fetchStudents = createAction(
    '[Students] Fetch Students',
    props<{ userId: number }>(),
);

export const fetchStudentsSuccess = createAction(
    '[Students] Fetch Students Success',
    props<{ students: IStudent[] }>(),
);

const actions = union({
    fetchStudents,
    fetchStudentsSuccess,
});

export type ActionsUnion = typeof actions;

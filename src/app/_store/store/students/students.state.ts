import * as StudentsActions from './students.actions';
import { IStudent } from '../../interfaces/students.interface';

export interface IState {
    selectedStudent: IStudent;
    students: IStudent[];
}

export const initialState: IState = {
    selectedStudent: null,
    students: [],
};

export function reducer(state: IState = initialState, action: StudentsActions.ActionsUnion): IState {
    switch (action.type) {

        case StudentsActions.fetchStudentsSuccess.type: {
            return {
                ...state,
                students: action.students,
            };
        }

        default: {
            return state;
        }

    }
}

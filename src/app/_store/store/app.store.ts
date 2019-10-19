import * as ErrorsState from './errors/errors.state';
import * as StudentsState from './students/students.state';


export type ErrorsState = ErrorsState.IState;
export type StudentsState = StudentsState.IState;


export interface IAppState {
    readonly errors: ErrorsState;
    readonly students: StudentsState;
}


export interface IAppReducers {
    // tslint:disable-next-line: ban-types
    readonly[reducerName: string]: Function;
}


export const reducers: IAppReducers = {
    errors: ErrorsState.reducer,
    students: StudentsState.reducer,
};

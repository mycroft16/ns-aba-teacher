import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as ErrorsActions from '../errors/errors.actions';

import { StudentsService } from './students.service';
import * as StudentsActions from './students.actions';

@Injectable()
export class StudentsEffects {

    @Effect()
    public fetchStudents: Observable<Action> = this.actions.pipe(
        ofType(StudentsActions.fetchStudents),
        switchMap((action) =>
            this.service.fetchStudents(action.userId).pipe(
                map((students) => StudentsActions.fetchStudentsSuccess({ students })),
                catchError(error => of(ErrorsActions.setError({ error }))),
            ),
        ),
    );

    constructor(
        private actions: Actions<StudentsActions.ActionsUnion>,
        private service: StudentsService,
    ) { }
}

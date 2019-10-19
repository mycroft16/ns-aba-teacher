import { Component } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { Store } from '@ngrx/store';
import { IAppState } from '../_store/store/app.store';
import { Observable } from 'rxjs';
import { IStudent } from '../_store/interfaces/students.interface';
import { fetchStudents } from '../_store/store/students/students.actions';

@Component({
    selector: 'Behavior',
    styleUrls: ['behavior.component.scss'],
    templateUrl: './behavior.component.html',
})
export class BehaviorComponent {

    public students: Observable<IStudent[]>;

    constructor(
        private store: Store<IAppState>,
    ) {
        // this.store.select(state => state.users.user.id).pipe(
        //     take(1),
        // ).subscribe(userId => {
        this.store.dispatch(fetchStudents({ userId: 1 }));
        // });
        this.students = this.store.select(state => state.students.students);
    }

    public onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

}

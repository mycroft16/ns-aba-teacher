import { Component } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';

@Component({
    selector: 'Students',
    templateUrl: './students.component.html',
})
export class StudentsComponent {

    public onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}

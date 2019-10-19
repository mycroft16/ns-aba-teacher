import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';

@Component({
    selector: 'Login',
    templateUrl: './login.component.html',
})
export class LoginComponent {

    constructor(private routerExtensions: RouterExtensions) { }

    public onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    public onFingerprintTap(): void {
        this.routerExtensions.navigate(['/behavior'], {
            transition: {
                name: 'fade',
            },
        });
    }
}

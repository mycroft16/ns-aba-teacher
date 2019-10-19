import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from 'nativescript-ui-sidedrawer';
import { filter } from 'rxjs/operators';
import * as app from 'tns-core-modules/application';

@Component({
    selector: 'ns-app',
    templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
    private _activatedUrl: string;
    private _sideDrawerTransition: DrawerTransitionBase;

    constructor(private router: Router, private routerExtensions: RouterExtensions) { }

    public isComponentSelected(url: string): boolean {
        return this._activatedUrl === url;
    }

    public ngOnInit(): void {
        this._activatedUrl = '/home';
        this._sideDrawerTransition = new SlideInOnTopTransition();

        this.router.events
        .pipe(filter((event: any) => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);
    }

    public get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    public onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: 'fade',
            },
        });

        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }

    public onSignOutTap(): void {
        console.log('Do Sign Out Stuff');
    }
}

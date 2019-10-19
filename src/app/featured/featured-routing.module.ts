import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { FeaturedComponent } from './featured.component';

const routes: Routes = [
    { path: '', component: FeaturedComponent },
];

@NgModule({
    exports: [NativeScriptRouterModule],
    imports: [NativeScriptRouterModule.forChild(routes)],
})
export class FeaturedRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { AnalyticsComponent } from './analytics.component';

const routes: Routes = [
    { path: '', component: AnalyticsComponent },
];

@NgModule({
    exports: [NativeScriptRouterModule],
    imports: [NativeScriptRouterModule.forChild(routes)],
})
export class AnalyticsRoutingModule { }

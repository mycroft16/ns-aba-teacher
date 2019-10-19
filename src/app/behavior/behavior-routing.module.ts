import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { BehaviorComponent } from './behavior.component';

const routes: Routes = [
    { path: '', component: BehaviorComponent },
];

@NgModule({
    exports: [NativeScriptRouterModule],
    imports: [NativeScriptRouterModule.forChild(routes)],
})
export class BehaviorRoutingModule { }

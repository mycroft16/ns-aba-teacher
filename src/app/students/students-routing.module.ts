import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { StudentsComponent } from './students.component';

const routes: Routes = [
    { path: '', component: StudentsComponent },
];

@NgModule({
    exports: [NativeScriptRouterModule],
    imports: [NativeScriptRouterModule.forChild(routes)],
})
export class StudentsRoutingModule { }

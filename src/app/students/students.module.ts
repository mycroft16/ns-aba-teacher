import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';

@NgModule({
    declarations: [
        StudentsComponent,
    ],
    imports: [
        NativeScriptCommonModule,
        StudentsRoutingModule,
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
    ],
})
export class StudentsModule { }

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { BehaviorRoutingModule } from './behavior-routing.module';
import { BehaviorComponent } from './behavior.component';

@NgModule({
    declarations: [
        BehaviorComponent,
    ],
    imports: [
        NativeScriptCommonModule,
        BehaviorRoutingModule,
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
    ],
})
export class BehaviorModule { }

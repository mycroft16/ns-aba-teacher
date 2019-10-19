import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { AnalyticsComponent } from './analytics.component';

@NgModule({
    declarations: [
        AnalyticsComponent,
    ],
    imports: [
        NativeScriptCommonModule,
        AnalyticsRoutingModule,
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
    ],
})
export class AnalyticsModule { }

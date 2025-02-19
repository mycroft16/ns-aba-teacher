import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { FeaturedRoutingModule } from './featured-routing.module';
import { FeaturedComponent } from './featured.component';

@NgModule({
    declarations: [
        FeaturedComponent,
    ],
    imports: [
        NativeScriptCommonModule,
        FeaturedRoutingModule,
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
    ],
})
export class FeaturedModule { }

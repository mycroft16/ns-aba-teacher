import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

import { MetaReducer, StoreModule as RxjsStore } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { EffectsModule } from '@ngrx/effects';
import { storeFreeze } from 'ngrx-store-freeze';
import { IAppState } from './app.store';

import { ApiService } from './api/api.service';
import { ApiPublicService } from './api/api-public.service';

import * as ErrorsState from './errors/errors.state';

import { StudentsEffects } from './students/students.effects';
import { StudentsService } from './students/students.service';
import * as StudentsState from './students/students.state';

export const metaReducers: MetaReducer<IAppState>[] = [
    storeFreeze,
];


export const PROVIDERS: any[] = [
    ApiService,
    ApiPublicService,
    StudentsService,
];


export const EFFECTS: ModuleWithProviders = EffectsModule.forRoot([
    StudentsEffects,
]);


export const STORES: any = {
    errors: ErrorsState.reducer,
    students: StudentsState.reducer,
};


@NgModule({
    imports: [
        HttpClientModule,
        NativeScriptHttpClientModule,
        RxjsStore.forRoot(STORES, { metaReducers }),
        StoreDevtoolsModule.instrument(),
        EFFECTS,
    ],
    providers: [
        ...PROVIDERS,
    ],
})
export class StoreModule {}

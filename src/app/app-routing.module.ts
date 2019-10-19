import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/behavior', pathMatch: 'full' },
    { path: 'login', loadChildren: () => import('~/app/login/login.module').then((m) => m.LoginModule) },
    { path: 'behavior', loadChildren: () => import('~/app/behavior/behavior.module').then((m) => m.BehaviorModule) },
    { path: 'students', loadChildren: () => import('~/app/students/students.module').then((m) => m.StudentsModule) },
    {
        loadChildren: () => import('~/app/analytics/analytics.module').then((m) => m.AnalyticsModule),
        path: 'analytics',
    },
    { path: 'featured', loadChildren: () => import('~/app/featured/featured.module').then((m) => m.FeaturedModule) },
    { path: 'settings', loadChildren: () => import('~/app/settings/settings.module').then((m) => m.SettingsModule) },
];

@NgModule({
    exports: [NativeScriptRouterModule],
    imports: [NativeScriptRouterModule.forRoot(routes)],
})
export class AppRoutingModule { }

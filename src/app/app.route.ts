import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
const routes: Routes = [
    {
        path:'login',
        loadChildren:'./login/login.module#LoginModule'
    },
    {
        path: 'home',
        loadChildren:'./home/home.module#HomeModule'

    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
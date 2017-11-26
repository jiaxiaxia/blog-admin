import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'blog',
                loadChildren: '../blog/blog.module#BlogModule'
            },
            {
                path: '',
                redirectTo: 'blog',
                pathMatch: 'full'
            }
        ],

    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}


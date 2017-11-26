import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BlogComponent} from "./blog.component";
import {ArticleComponent} from './article/article.component';

const routes: Routes = [
    {
        path: '',
        component: BlogComponent,
        children: [
            {
                path: 'article',
                component: ArticleComponent
            },
            {
                path:'',
                redirectTo:'article'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogRoutingModule {
}

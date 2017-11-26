import {NgModule} from '@angular/core';
import {CoreModule} from "../core/core.module";

import {BlogRoutingModule} from './blog.route'
import {EditComponent} from '../common/edit/edit.component';
import {BlogComponent} from './blog.component';
import {MarkdownComponent} from '../common/markdown/markdown.component';
import {TagListComponent} from '../common/tag-list/tag-list.component';
import {PostListComponent} from '../common/post-list/post-list.component';
import {ArticleComponent} from './article/article.component'

@NgModule({
    imports: [
        CoreModule,
        BlogRoutingModule
    ],
    declarations: [
        EditComponent,
        BlogComponent,
        MarkdownComponent,
        PostListComponent,
        ArticleComponent,
        TagListComponent
    ]
})
export class BlogModule {
}

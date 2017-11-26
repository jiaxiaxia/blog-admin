import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    forwardRef,
    Input,
    Output,
    ViewEncapsulation
} from '@angular/core';
import * as marked from "marked";
import * as hljs from 'highlight.js';
import SimpleMDE from 'simplemde';

import 'codemirror/mode/meta.js';
import 'codemirror/mode/go/go.js';
import 'codemirror/mode/gfm/gfm.js';
import 'codemirror/mode/vue/vue.js';
import 'codemirror/mode/css/css.js';
import 'codemirror/mode/lua/lua.js';
import 'codemirror/mode/php/php.js';
import 'codemirror/mode/xml/xml.js';
import 'codemirror/mode/jsx/jsx.js';
import 'codemirror/mode/sql/sql.js';
import 'codemirror/mode/pug/pug.js';
import 'codemirror/mode/lua/lua.js';
import 'codemirror/mode/sass/sass.js';
import 'codemirror/mode/http/http.js';
import 'codemirror/mode/perl/perl.js';
import 'codemirror/mode/ruby/ruby.js';
import 'codemirror/mode/nginx/nginx.js';
import 'codemirror/mode/shell/shell.js';
import 'codemirror/mode/clike/clike.js';
import 'codemirror/mode/stylus/stylus.js';
import 'codemirror/mode/python/python.js';
import 'codemirror/mode/haskell/haskell.js';
import 'codemirror/mode/markdown/markdown.js';
import 'codemirror/mode/htmlmixed/htmlmixed.js';
import 'codemirror/mode/javascript/javascript.js';

import 'codemirror/addon/mode/overlay.js';
import 'codemirror/addon/edit/closetag.js'
import 'codemirror/addon/edit/continuelist.js';
import 'codemirror/addon/edit/closebrackets.js';
import 'codemirror/addon/scroll/annotatescrollbar.js'
import 'codemirror/addon/selection/active-line.js';
import 'codemirror/addon/selection/mark-selection.js';
import 'codemirror/addon/fold/foldcode.js';
import 'codemirror/addon/fold/xml-fold.js';
import 'codemirror/addon/fold/foldgutter.js';
import 'codemirror/addon/fold/comment-fold.js';
import 'codemirror/addon/fold/indent-fold.js';
import 'codemirror/addon/fold/brace-fold.js';
import 'codemirror/addon/fold/markdown-fold.js';

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    highlight(code, lang, callback) {
        return hljs.highlightAuto(code).value;
    }
});

@Component({
    selector: 'app-markdown',
    templateUrl: './markdown.component.html',
    styleUrls: [
        './markdown.component.scss'
    ],
    encapsulation: ViewEncapsulation.None
})

export class MarkdownComponent implements AfterViewInit {


    // 基本数据
    editor: any;
    content: any = '';
    editorElem: HTMLElement;

    @Input() postContent:string;
    @Output() change: EventEmitter<any> = new EventEmitter();


    // 注入Dom
    constructor(private elementRef: ElementRef) {
    }


    // 视图加载完成后执行初始化
    ngAfterViewInit() {
        if (this.editor) return false;
        this.editor = new SimpleMDE({
            autoDownloadFontAwesome: false,
            element: document.getElementById('editor'),
            previewRender: function (plainText) {
                return marked(plainText); // Returns HTML from a custom parser
            },
            spellChecker: false,
            initialValue: this.postContent,
        })
        console.log(this.editor)
        this.editor.codemirror.on('blur', cm => {
           console.log('blur')
        });
        this.editor.codemirror.on('change', () => {
            const content = this.editor.value();
            if (!Object.is(content, this.content)) {
                this.content = content;
                this.change.emit({
                    editor: this.editor,
                    content: this.content
                });
            }
        });
    }
}

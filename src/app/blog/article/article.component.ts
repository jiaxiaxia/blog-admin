import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor() {
  }

  postId: any = -1
  updateList: Boolean = false

  ngOnInit() {

  }

  handlerPost(id) {
    this.postId = id;
    console.log(this.postId)
  }

  titleUpdated() {
   this.updateList=! this.updateList
  }


}

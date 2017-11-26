import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {PostListService} from './post-list.service';
import {PostListModel} from './post-list.model'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  providers: [PostListService]
})
export class PostListComponent implements OnInit {

  postList: PostListModel[];
  selectedIndex: 0


  @Output() clickPost = new EventEmitter<any>();

  @Input()
  set updateList(updateList: Boolean) {
    console.log(updateList)
    this.getPostList();
  }

  constructor(private postListService: PostListService) {

  }

  ngOnInit() {
    this.getPostList();
  }

  addDraft() {
    this.postListService.addDraft()
      .then(data => {
        console.log(data)
        this.postList.unshift(data)
        this.clickPost.emit(data.id)
      })
  }

  getPostList() {
    this.postListService.getDraftsList().then(list => {
      this.postList = list
      console.log(list)
      this.clickPost.emit(this.postList[0].id)
    });
  }

  click(id: any, index) {
    this.selectedIndex = index
    this.clickPost.emit(id)
  }

}

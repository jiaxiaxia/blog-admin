import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {EditService} from './edit.service';
import {EditModel} from './edit.model';

@Component({
  selector: 'app-edit',
  templateUrl: 'edit.component.html',
  styleUrls: ['edit.component.scss'],
  providers: [EditService]
})
export class EditComponent implements OnInit {

  showTagInput: boolean = false;
  tags: any[] = [];
  editPost: EditModel = new EditModel(null)
  _postId: any
  @Input()
  set postId(postId: any) {
    this._postId = postId
    console.log(this._postId)
    if (postId !== -1) {
      this.getDraft(postId)
    }

  }

  @Output() titleUpdated: EventEmitter<any> = new EventEmitter()

  get postId() {
    return this._postId
  }

  constructor(private editService: EditService) {

  }

  ngOnInit() {
    console.log(this.postId)
  }


  getDraft(id) {
    this.editService.getDraft(id).then(post => {
      this.editPost = post;
      console.log(this.editPost);
      this.tags = (_.compact(post.tags)).map(tag => {
        return {focus: false, value: tag.name, id: tag.id}
      })
    })
  }

  // 删除草稿
  public deleteDraft() {
    this.editService.deleteDraft(this._postId)
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  // 发布文章
  public publishDraft() {
    this.editService.publishDraft(this._postId)
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.log(error)
      })
  }


  //更新草稿
  public modifyDraft(event) {
    this.editService.modifyDraft(this._postId, event.modifies)
  }

  // 文章内容格式化
  public contentChangeHandle(event) {
    console.log(event);
    if (event.content != undefined) {

    }
  }

  // 保存标题
  public saveTitle() {
    console.log(this.editPost.title)
    if (this.editPost.title) {
      this.editService.modifyDraft(this._postId, {title: this.editPost.title})
      this.titleUpdated.emit()
    }
  }


}

import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {TagListService} from "./tag-list.service";

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss'],
  providers: [TagListService]
})
export class TagListComponent implements OnInit {

  @Input() tags: any[]
  inputTag: string = ''
  @Output() tagsModified: EventEmitter<any> = new EventEmitter()

  constructor(private tagListService: TagListService) {
  }

  ngOnInit() {
  }

  //tags相关操作

  private deleteTag() {
    if (this.tags.length > 0) {
      if (this.tags[this.tags.length - 1].focus) {
        this.tags.pop();
        this.updateDraftsTags()

      } else {
        this.tags[this.tags.length - 1].focus = true
      }
    }

  }

  private addTag() {
    if (this.inputTag) {
      let tagIndex = _.findIndex(this.tags, (tag) => {
        return tag.value === this.inputTag
      })
      if (tagIndex === -1) {
        this.tagListService.addTag(this.inputTag)
          .then(data => {
            this.tags.push({
              'value': this.inputTag,
              'focus': false,
              'id': data.id
            })
            this.inputTag = ''
            this.updateDraftsTags()
          })


      }
    }

  }

  private updateDraftsTags() {
    let tagsIdArray = []
    this.tags.map(tag => tagsIdArray.push(tag.id))
    this.tagsModified.emit({
      modifies: {tags: tagsIdArray}
    })
  }

  public onTagInputKeyup($event) {
    console.log($event.key)
    if ($event.key === 'Backspace') {
      if (this.inputTag == '') {
        this.deleteTag();
      }
    }
    if ($event.key === 'Enter') {
      this.addTag();
    }
  }
}

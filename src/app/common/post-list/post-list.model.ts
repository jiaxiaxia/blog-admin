export class PostListModel {
  id: string
  title: string
  createTime: string
  excerpt: string
  draftPublished: boolean
  lastEditTime: string

  constructor(model: any = null) {
    if (model) {
      this.id = model.id;
      this.title = model.title;
      this.createTime = model.createTime;
      this.lastEditTime = model.lastEditTime;
      this.excerpt = model.excerpt;
      this.draftPublished = model.draftPublished
    }
  }

}

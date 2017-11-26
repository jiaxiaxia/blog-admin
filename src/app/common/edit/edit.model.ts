export class EditModel {
  id: number
  title: string
  tags: any[]
  excerpt: string
  content: string
  draftPublished: boolean

  constructor(model: any = null) {
    if (model) {
      this.id = model.id
      this.title = model.title
      this.tags = model.tags
      this.excerpt = model.excerpt
      this.content = model.content
      this.draftPublished = model.draftPublished
    }

  }
}

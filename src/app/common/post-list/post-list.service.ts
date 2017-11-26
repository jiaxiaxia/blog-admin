import {Injectable} from '@angular/core';
import {PostListModel} from './post-list.model'
import {Http} from "@angular/http";
import {API_ROOT} from "../../../config";

@Injectable()
export class PostListService {
    private draftsUrl = `${API_ROOT}/drafts`

    constructor(private http: Http) {
    }


    addDraft(): Promise<PostListModel> {
        let draft = {title: '未命名文件'}
        return this.http.post(`${this.draftsUrl}`, draft)
            .toPromise()
            .then(response => response.json().data as PostListModel)
            .catch(this.handlerError)
    }

    getDraftsList(): Promise<PostListModel[]> {
        console.log('sss')

        return this.http.get(`${this.draftsUrl}`)
            .toPromise()
            .then(response => response.json().data as PostListModel[])
            .catch(this.handlerError)
    }

    getPost(id: number) {

    }

    private handlerError(error: any): Promise<any> {
        console.log(error)
        return Promise.reject(error)
    }

}

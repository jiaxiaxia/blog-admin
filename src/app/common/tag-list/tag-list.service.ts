import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {API_ROOT} from "../../../config";

@Injectable()
export class TagListService {
  private tagUrl = `${API_ROOT}/tags`
  private draftUrl = `${API_ROOT}/drafts`

  constructor(private http: Http) {

  }

  modifyDraftTags(postId: any = 2,modifies): Promise<any> {
    return this.http.patch(`${this.draftUrl}/${postId}`, modifies)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError)
  }

  addTag(name: string): Promise<any> {
    return this.http.post(`${this.tagUrl}`, {name: name})
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}

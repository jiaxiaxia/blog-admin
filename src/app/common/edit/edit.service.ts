import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {EditModel} from './edit.model'
import {API_ROOT} from "../../../config";
import {promise} from "selenium-webdriver";

@Injectable()
export class EditService {
  private draftsUrl = `${API_ROOT}/drafts`

  constructor(private http: Http) {
  }

  getDraft(id: number): Promise<EditModel> {
    return this.http.get(`${this.draftsUrl}/${id}`)
      .toPromise()
      .then(response => response.json().data as EditModel)
      .catch(this.handlerError)
  }

  modifyDraft(id: number, modifies): Promise<any> {
    return this.http.patch(`${this.draftsUrl}/${id}`, modifies)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handlerError)
  }

  deleteDraft(id): Promise<any> {

    return this.http.delete(`${this.draftsUrl}/${id}`)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handlerError)
  }

  publishDraft(id): Promise<any> {
    return this.http.post(`${this.draftsUrl}/${id}/publish`,null)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handlerError)
  }


  private handlerError(error: any): Promise<any> {
    console.log(error)
    return Promise.reject(error)
  }
}

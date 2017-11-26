import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { ItemModel } from './item/item.model';

@Injectable()
export class SidenavService {

  private _itemsSubject: BehaviorSubject<ItemModel[]> = new BehaviorSubject<ItemModel[]>([]);
  private _items: ItemModel[] = [];
  items$: Observable<ItemModel[]> = this._itemsSubject.asObservable();

  private _currentlyOpenSubject: BehaviorSubject<ItemModel[]> = new BehaviorSubject<ItemModel[]>([]);
  private _currentlyOpen: ItemModel[] = [];
  currentlyOpen$: Observable<ItemModel[]> = this._currentlyOpenSubject.asObservable();

  constructor() {
    const blog=this.addItem('博客管理','library_books','/home/blog/article',9);
    // this.addSubItem(blog,'写博客','/home/blog/add',1)
    // this.addSubItem(blog,'文章管理','/home/blog/list',1)
  }

  addItem(name: string, icon: string, route: string, position: number, badge?: string, badgeColor?: string) {
    const item = new ItemModel({
      name: name,
      icon: icon,
      route: route,
      subItems: [],
      position: position || 99,
      badge: badge || null,
      badgeColor: badgeColor || null
    });

    this._items.push(item);
    this._itemsSubject.next(this._items);

    return item;
  }

  addSubItem(parent: ItemModel, name: string, route: string, position: number) {
    const item = new ItemModel({
      name: name,
      route: route,
      parent: parent,
      subItems: [],
      position: position || 99
    });

    parent.subItems.push(item);
    this._itemsSubject.next(this._items);

    return item;
  }

  isOpen(item: ItemModel) {
    return (this._currentlyOpen.indexOf(item) != -1);
  }

  toggleCurrentlyOpen(item: ItemModel) {
    let currentlyOpen = this._currentlyOpen;
    if (this.isOpen(item)) {
      if (currentlyOpen.length > 1) {
        currentlyOpen.length = this._currentlyOpen.indexOf(item);
      } else {
        currentlyOpen = [];
      }
    } else {
      currentlyOpen = this.getAllParents(item);
    }

    this._currentlyOpen = currentlyOpen;
    this._currentlyOpenSubject.next(currentlyOpen);
  }

  getAllParents(item: ItemModel, currentlyOpen: ItemModel[] = []) {
    currentlyOpen.unshift(item);

    if (item.hasParent()) {
      return this.getAllParents(item.parent, currentlyOpen);
    } else {
      return currentlyOpen;
    }
  }
}

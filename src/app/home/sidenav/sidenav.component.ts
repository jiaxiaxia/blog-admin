import {Component, OnInit, Input, Inject} from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";
import {Subscription} from 'rxjs';

import {ItemModel} from './item/item.model'
@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

    constructor(@Inject('sidenavService') private service,
                private router: Router) {
    }

    @Input() theme;
    private _itemsSubscription: Subscription;

    public items: ItemModel[] = [];

    ngOnInit() {
        this._itemsSubscription = this.service.items$.subscribe((items: ItemModel[]) => {
            this.items = items;
        });

        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                console.log(event.url);
            }
        });
    }

}

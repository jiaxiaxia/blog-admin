
export class ItemModel {
    name: string;
    icon: string;
    route: any;
    parent: ItemModel;
    subItems: ItemModel[];
    position: number;
    badge: string;
    badgeColor: string;

    constructor(model: any = null) {
        if (model) {
            this.name = model.name;
            this.icon = model.icon;
            this.route = model.route;
            this.parent = model.parent;
            this.subItems = this.mapSubItems(model.subItems);
            this.position = model.position;
            this.badge = model.badge;
            this.badgeColor = model.badgeColor;
        }
    }

    hasSubItems() {
        if (this.subItems) {
            return this.subItems.length > 0;
        }

        return false;
    }

    hasParent() {
        return !!this.parent;
    }

    mapSubItems(list: ItemModel[]) {
        if (list) {
            list.forEach((item, index) => {
                list[index] = new ItemModel(item);
            });

            return list;
        }
    }

    isRouteString() {
        return this.route instanceof String || typeof this.route === 'string';
    }
}

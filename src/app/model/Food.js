export class Food {
    constructor(_id, name: string, preview: string, price: string, images) {
        this._id = _id;
        this.name = name;
        this.preview = preview;
        this.price = price;
        this.images = images;
    }
}
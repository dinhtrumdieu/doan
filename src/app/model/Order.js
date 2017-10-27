export class Order {
    constructor(_id, day: string, orderItem ) {
        this._id = _id;
        this.day = day;
        this.orderItem = orderItem;
    }
}
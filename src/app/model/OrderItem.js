export class OrderItem {
    constructor(_id, foodname: string, cookername: string, quantity: number, price: string, time: string) {
        this._id = _id;
        this.foodname = foodname;
        this.cookername = cookername;
        this.quantity = quantity;
        this.price = price;
        this.time = time;
    }
}
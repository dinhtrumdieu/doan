export class Order {
    constructor(_id, day: string, foodname: string, cookername: string, quantity: number, price: string, time: string, image, status: Number) {
        this._id = _id;
        this.day = day;
        this.foodname = foodname;
        this.cookername = cookername;
        this.quantity = quantity;
        this.price = price;
        this.time = time;
        this.image = image;
        this.status = status
    }
}
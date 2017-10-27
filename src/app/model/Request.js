export class Request {
    constructor(_id, username: string, phone: string, address: string, avatar, foodname: string, quantity: string, price: string, images, time: string,status:string) {
        this._id = _id;
        this.username = username;
        this.avatar = avatar;
        this.foodname = foodname;
        this.quantity = quantity;
        this.price = price;
        this.images = images;
        this.time = time;
        this.phone=phone;
        this.address=address;
        this.status=status;
    }
}
export class Cooker {
    constructor(_id, name: String, image, star: Number,totalFood:Number,totalReview:Number,isCooker:Boolean) {
        this._id = _id;
        this.name = name;
        this.image = image;
        this.star = star;
        this.totalFood = totalFood;
        this.review = totalReview;
        this.isCooker = isCooker;
    }
}
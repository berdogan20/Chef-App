export class Food{
    public name: string;
    public description: string;
    public imageUrl: string;
    public preperationTime: number; // minutes
    public price: number;           // $

    constructor(name: string, description: string, imageUrl: string, preperationTime: number, price: number){
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.preperationTime = preperationTime;
        this.price = price;
    }
}
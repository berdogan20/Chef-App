import { Food } from "./food.model";
import { User } from "./user.model";

export class Order{
    public orderOwner: User;                         // who made this order, address
    public orderMap: Map<Food, number>;              // food and quantity information
}
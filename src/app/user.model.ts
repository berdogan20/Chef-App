import { Food } from "./food.model";

export class User{
    
    public mail:string;
    public password: string;
    public address: string;
    public basket: Map<Food, number>;

    constructor(mail: string, password: string, address:string){
        this.mail = mail;
        this.password = password;
        this.address = address;
        this.basket = new Map<Food, number>();
    }

    getTotalPayment(){
        let total = 0;
        for (const [food, quantity] of this.basket.entries()) {
          total += food.price * quantity;
        }
        return total;
      } 

      
    
}
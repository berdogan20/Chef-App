import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Food } from '../food.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // Add this line
})
export class BasketComponent implements OnInit {
  
  @Input() food: Food;
  public currentBasket: Map<Food, number>;
  constructor(private dataService: DataService){
  }

  getCurrentBasket(): Map<Food, number> {
    return this.dataService.currentUser.basket;
  }
  
  ngOnInit(): void {
    this.currentBasket = this.dataService.currentUser.basket
    console.log(this.currentBasket);
  }

  getTotalFoodNumber(){
    let total = 0;
    for (let food of this.currentBasket.keys()){
      total += this.currentBasket.get(food);
    }
    return total;
  }

  getTotalPayment(){
    let total = 0;
    for (let food of this.currentBasket.keys()){
      if (food){
        total += this.currentBasket.get(food) * food.price;
      }
    }
    return total;
  }

  onIncrement(){

    let amount = this.currentBasket.get(this.food);
    this.currentBasket.set(this.food, amount + 1);
  }

  onDecrement(){
    let amount = this.currentBasket.get(this.food);
    if (amount > 1){
      this.currentBasket.set(this.food, amount - 1);
    }
    else{
      this.currentBasket.delete(this.food);
    }
  }
}

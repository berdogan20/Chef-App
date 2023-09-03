import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Food } from 'src/app/food.model';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit{

  @Input() food: Food;

  constructor(private dataService: DataService){}

  ngOnInit(): void {
  }

  onAddToBasket(){

    const currentBasket = this.dataService.currentUser.basket;
    
    if (currentBasket.get(this.food)){
      currentBasket.set(this.food, 
                        currentBasket.get(this.food) + 1);
    }
    else{
      currentBasket.set(this.food, 1);
    }
    
  }
}

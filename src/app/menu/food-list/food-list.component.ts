import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Food } from 'src/app/food.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit{

  foodMap: Map<string, Food[]>;                 // will get categories and corresponding foods from data service.
  
  constructor(private dataService: DataService,
             private categoryService: CategoryService){}

  ngOnInit(): void {
    this.foodMap = this.dataService.foodMap;
  }

  getFoods(){
    const selectedCategory = this.categoryService.selectedCategory;
    
    if (selectedCategory == 'All'){
      return this.getAllFoods();
    }

    return this.foodMap.get(selectedCategory);
  }


  getAllFoods(){
    
    /* This function iterates over all categories, and over all foods
       and returns a food array
    */

    const allFoods: Food[] = [];
  
    for (let category of this.foodMap.keys()){
      for (let food of this.foodMap.get(category)){
        allFoods.push(food);
      }
    }

    return allFoods;
  }
}

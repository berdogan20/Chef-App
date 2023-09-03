import { Component } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  constructor(private categoryService: CategoryService)
  {}

  AllSelected(){this.categoryService.selectedCategory = "All";}
  PizzaSelected(){this.categoryService.selectedCategory = "Pizza";}
  BurgerSelected(){this.categoryService.selectedCategory = "Burger";}
  BreakfastSelected(){this.categoryService.selectedCategory = "Breakfast";}
  SushiSelected(){this.categoryService.selectedCategory = "Sushi";}
  SoupSelected(){this.categoryService.selectedCategory = "Soup";}
  SaladSelected(){this.categoryService.selectedCategory = "Salad";}
}

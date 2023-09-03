import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../data.service';
import { Food } from '../food.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  
  public currentBasket: Map<Food, number>;

  constructor(private dataService: DataService){
  }

  ngOnInit(): void {
    this.currentBasket = this.dataService.currentUser.basket;
   
    console.log(this.currentBasket);
  }

}

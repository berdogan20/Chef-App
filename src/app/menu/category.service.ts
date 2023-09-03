import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  selectedCategory = "All"; // by default
  constructor() { }

  
}

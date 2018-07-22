import { Component, OnInit } from '@angular/core';
import {Ingredients} from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredients[] = [
    new Ingredients('potatoes', 4),
    new Ingredients('tomatoes', 1),
    new Ingredients('eggs', 3),
    new Ingredients('carrots', 2),
  ];
  constructor() { }

  ngOnInit() {
  }

}

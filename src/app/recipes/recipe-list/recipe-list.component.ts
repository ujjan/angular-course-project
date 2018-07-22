import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('test recipe', 'This is js a simple test', 'https://qph.ec.quoracdn.net/main-qimg-10770f75d72c19aec7b0c8e73ee2f135-c'),
    new Recipe('test recipe', 'This is js a simple test', 'https://qph.ec.quoracdn.net/main-qimg-10770f75d72c19aec7b0c8e73ee2f135-c'),

  ];

  constructor() { }

  ngOnInit() {

  }

}

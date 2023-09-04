import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Veggie Al Pastor',
      'Authentic vegan Al Pastor recipe',
      'https://www.conflictedvegan.com/wp-content/uploads/2021/02/Authentic-Vegan-Tacos-Al-Pastor.jpg'
    ),
    new Recipe(
      'Mediterranean Bowl',
      'Falafel hummus veggie bown',
      'https://theplantbasedschool.com/wp-content/uploads/2023/06/Mediterranean-bowl-7.jpg'
    ),
    new Recipe(
      'Veggitarian Enchiladas',
      'Delicious encilada recipe',
      'https://assets.bonappetit.com/photos/5cd34bded7a272f22bd26e06/1:1/w_960,c_limit/HLY-Veggie-Enchilada-Horizontal.jpg'
    ),
  ]; //ends recipes array

  //required to implement OnInit
  ngOnInit(): void {
    console.log('RecipeListComponent initialized');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private recipeservice: RecipeService) {}

  storeRecipe() {
    const recipes = this.recipeservice.getRecipes();
    this.http
      .put(
        'https://receipebook-ffb0d-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((resp) => {
        console.log(resp);
      });
  }
  fetchRecipe() {
    this.http
      .get<Recipe[]>(
        'https://receipebook-ffb0d-default-rtdb.firebaseio.com/recipes.json'
      )
      .subscribe((resp) => {
        this.recipeservice.setRecipes(resp);
      });
  }
}

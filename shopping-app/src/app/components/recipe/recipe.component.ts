import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../interfaces/recipe';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recipe',
  imports: [ MatButtonModule, MatFormFieldModule, MatInputModule, RouterModule ],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent {
  recipes: Recipe[] = [];
  constructor(private recipeService: RecipeService) {
  }

  async ngOnInit() {
    this.recipes = await this.recipeService.getRecipes();
  }

  async addRecipe(titleInput: HTMLInputElement) {
    if (titleInput.value.trim()) {
      await this.recipeService.addRecipe(titleInput.value);
      this.recipes = await this.recipeService.getRecipes();
      titleInput.value = ''; 
    }
  }
}

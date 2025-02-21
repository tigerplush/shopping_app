import { Component } from '@angular/core';
import { Recipe } from '../../interfaces/recipe';
import { RecipeService } from '../../services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IngredientService } from '../../services/ingredient.service';
import { Ingredient } from '../../interfaces/ingredient';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-recipe-details',
  imports: [ MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatListModule ],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.scss'
})
export class RecipeDetailsComponent {
  recipe!: Recipe;
  ingredients: Ingredient[] = [];

  constructor(
    private recipeService: RecipeService
    , private ingredientService: IngredientService
    , private route: ActivatedRoute
    , private router: Router
  ) {}

  async ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    const recipe = await this.recipeService.getRecipe(id);
    if (recipe !== undefined) {
      this.recipe = recipe;
      this.ingredients = await this.ingredientService.getIngredients(this.recipe.id ?? -1);
    }
    else {
      this.router.navigate(['/not-found']);
    }
  }

  async addIngredient(titleInput: HTMLInputElement) {
    if(titleInput.value.trim() && this.recipe.id !== undefined) {
      await this.ingredientService.addIngredient(this.recipe.id, titleInput.value);
      titleInput.value = ''; 
      this.ingredients = await this.ingredientService.getIngredients(this.recipe.id);
    }
  }
  
  async onDelete() {
    if(this.recipe.id !== undefined)
    {
      await this.ingredientService.deleteIngredientsByOwner(this.recipe.id);
      await this.recipeService.deleteRecipe(this.recipe.id);
      this.router.navigate(['/recipes']);
    }
  }

  async deleteIngredient(id: number | undefined) {
    if(id !== undefined && this.recipe.id !== undefined) {
      await this.ingredientService.deleteIngredient(id);
      this.ingredients = await this.ingredientService.getIngredients(this.recipe.id)
    }
  }
}

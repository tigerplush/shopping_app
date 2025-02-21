import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { Recipe } from '../../interfaces/recipe';
import { RecipeService } from '../../services/recipe.service';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { IngredientService } from '../../services/ingredient.service';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-weekly-plan',
  imports: [ MatFormFieldModule, MatSelectModule, MatButtonModule ],
  templateUrl: './weekly-plan.component.html',
  styleUrl: './weekly-plan.component.scss'
})
export class WeeklyPlanComponent {
  weekdays = [
    'Samstag',
    'Sonntag',
    'Montag',
    'Dienstag',
    'Mittwoch',
    'Donnerstag',
    'Freitag',
    'Samstag',
  ];

  recipes: Recipe[] = [];

  selectedRecipes: Array<Recipe | undefined> = new Array(8);

  constructor(
    private recipeService: RecipeService
    , private ingredientService: IngredientService
    , private itemService: ItemService
    , private router: Router
  ) {}

  async ngOnInit() {
    this.recipes = await this.recipeService.getRecipes();
  }

  async onAddIngredients() {
    for(let recipe of this.selectedRecipes) {
      if(recipe?.id === undefined) {
        continue;
      }
      let ingredients = await this.ingredientService.getIngredients(recipe.id);
      for(let ingredient of ingredients) {
        await this.itemService.addOrIncrementItem(ingredient);
      }
    }
    this.router.navigate(['/items']);
  }

  onSelectionChange(index: number, event: MatSelectChange) {
    this.selectedRecipes[index] = event.value;
  }
}

import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipe';
import { db } from '../shop-db';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  async addRecipe(title: string) {
    return db.recipes.add({ title, updatedAt: Date.now() });
  }
  async getRecipe(id: number) {
    return db.recipes.get(id);
  }
  async getRecipes(): Promise<Recipe[]> {
    return db.recipes.toArray();
  }
  async deleteRecipe(id: number) {
    return db.recipes.delete(id);
  }
}

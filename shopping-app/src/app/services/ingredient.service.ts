import { Injectable } from '@angular/core';
import { db } from '../shop-db';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  async getIngredients(id: number) {
    return db.ingredients.where("owner").equals(id).toArray();
  }

  async addIngredient(id: number, title: string) {
    return db.ingredients.add({ title, owner: id, updatedAt: Date.now() });
  }

  async deleteIngredientsByOwner(id: number) {
    return db.ingredients.where("owner").equals(id).delete();
  }

  async deleteIngredient(id: number) {
    return db.ingredients.delete(id);
  }
}

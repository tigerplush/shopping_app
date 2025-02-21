import { Injectable } from "@angular/core";
import { db } from "../shop-db";
import { Item } from "../interfaces/item";
import { Ingredient } from "../interfaces/ingredient";

@Injectable({
    providedIn: 'root'
})
export class ItemService {
    async addItem(title: string) {
        return db.items.add({ title, amount: 1, completed: false, updatedAt: Date.now() });
    }
    
    async addOrIncrementItem(ingredient: Ingredient) {
      let existing = await db.items.where("title").equals(ingredient.title).first();
      if(existing?.id !== undefined) {
        return db.items.update(existing.id, {amount: existing.amount + 1});
      }
      else {
        return this.addItem(ingredient.title);
      }
    }

    async getItems(): Promise<Item[]> {
        return db.items.toArray();
    }

    async deleteItem(id: number) {
      return db.items.delete(id);
    }

    async deleteAll() {
        return db.items.clear();
    }
}
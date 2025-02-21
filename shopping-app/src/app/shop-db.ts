import Dexie from 'dexie';
import { Item } from './interfaces/item';
import { Recipe } from './interfaces/recipe';
import { Ingredient } from './interfaces/ingredient';

export class ShopDb extends Dexie {
    items: Dexie.Table<Item, number>;
    recipes: Dexie.Table<Recipe, number>;
    ingredients: Dexie.Table<Ingredient, number>;

    constructor() {
        super('ShopDatabase');

        this.version(1).stores({
            items: '++id, title, number, completed, updatedAt',
            recipes: '++id, title, updatedAt',
            ingredients: '++id, title, owner, updatedAt'
        });

        this.items = this.table('items');
        this.recipes = this.table('recipes');
        this.ingredients = this.table('ingredients');
    }
}

export const db = new ShopDb();
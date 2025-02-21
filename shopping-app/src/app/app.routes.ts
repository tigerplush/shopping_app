import { Routes } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WeeklyPlanComponent } from './components/weekly-plan/weekly-plan.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'items',
        pathMatch: 'full'
    },
    {
        path: 'items',
        component: ItemListComponent
    },
    {
        path: 'week-plan',
        component: WeeklyPlanComponent
    },
    {
        path: 'recipes',
        component: RecipeComponent
    },
    {
        path: 'recipes/:id',
        component: RecipeDetailsComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

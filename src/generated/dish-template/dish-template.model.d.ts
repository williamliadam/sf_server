import { MealTemplate } from '../meal-template/meal-template.model';
import { Recipe } from '../recipe/recipe.model';
export declare class DishTemplate {
    id: number;
    recipeId: number;
    amount: number;
    createdAt: Date;
    updatedAt: Date;
    mealTemplateId: number | null;
    usedMealTemplates?: MealTemplate | null;
    recipe?: Recipe;
}

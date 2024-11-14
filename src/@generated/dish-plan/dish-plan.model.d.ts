import { User } from '../user/user.model';
import { Recipe } from '../recipe/recipe.model';
import { MealPlan } from '../meal-plan/meal-plan.model';
export declare class DishPlan {
    id: number;
    recipeId: number;
    amount: number;
    planCookerId: number;
    mealPlanId: number | null;
    createdAt: Date;
    updatedAt: Date;
    planCooker?: User;
    recipe?: Recipe;
    usedMealPlan?: MealPlan | null;
}

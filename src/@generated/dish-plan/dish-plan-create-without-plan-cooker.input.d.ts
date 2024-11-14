import { RecipeCreateNestedOneWithoutUsedDishPlansInput } from '../recipe/recipe-create-nested-one-without-used-dish-plans.input';
import { MealPlanCreateNestedOneWithoutDishPlansInput } from '../meal-plan/meal-plan-create-nested-one-without-dish-plans.input';
export declare class DishPlanCreateWithoutPlanCookerInput {
    amount: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    recipe: RecipeCreateNestedOneWithoutUsedDishPlansInput;
    usedMealPlan?: MealPlanCreateNestedOneWithoutDishPlansInput;
}

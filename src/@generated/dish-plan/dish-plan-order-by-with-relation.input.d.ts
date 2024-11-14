import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { RecipeOrderByWithRelationInput } from '../recipe/recipe-order-by-with-relation.input';
import { MealPlanOrderByWithRelationInput } from '../meal-plan/meal-plan-order-by-with-relation.input';
export declare class DishPlanOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    recipeId?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    planCookerId?: keyof typeof SortOrder;
    mealPlanId?: SortOrderInput;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    planCooker?: UserOrderByWithRelationInput;
    recipe?: RecipeOrderByWithRelationInput;
    usedMealPlan?: MealPlanOrderByWithRelationInput;
}

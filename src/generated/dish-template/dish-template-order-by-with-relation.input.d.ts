import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { MealTemplateOrderByWithRelationInput } from '../meal-template/meal-template-order-by-with-relation.input';
import { RecipeOrderByWithRelationInput } from '../recipe/recipe-order-by-with-relation.input';
export declare class DishTemplateOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    recipeId?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    mealTemplateId?: SortOrderInput;
    usedMealTemplates?: MealTemplateOrderByWithRelationInput;
    recipe?: RecipeOrderByWithRelationInput;
}

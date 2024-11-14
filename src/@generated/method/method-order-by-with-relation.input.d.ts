import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { RecipeOrderByWithRelationInput } from '../recipe/recipe-order-by-with-relation.input';
export declare class MethodOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    code?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    desc?: keyof typeof SortOrder;
    recipeId?: SortOrderInput;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    usedRecipe?: RecipeOrderByWithRelationInput;
}
